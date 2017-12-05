import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { addItemGroup } from '../Receipt/actions';
import { jsonify } from '../utils'

class AddItemGroup extends React.Component {

  toggle = () => this.props.toggle(this.props.modal);

  render() {
    const { invalid, handleSubmit, className, isOpen } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={this.toggle} className={className}>
        <ModalHeader toggle={this.toggle}>Lisää tuoteryhmä</ModalHeader>
        <ModalBody>
          <Field name='name' type="text" component='input' label="Name" />
        </ModalBody>
        <ModalFooter>
          <Button disabled={invalid} color="primary" onClick={handleSubmit}>Save</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
   const { itemGroups = [] } = state;
   return { itemGroups };
 }

 const validate = (values, {itemGroups = []}) => {
   const errors = {}
   if (!values.name) errors.name = 'Required'
   const exists = values.name && itemGroups.findIndex(i => i.name.toUpperCase() === values.name.toUpperCase()) >= 0;
   if (exists) errors.name = 'Group already exists'

   return errors
 }

 const handlePost = ({endpoint, values, callback, dispatch}) => {
   const api_url = 'http://localhost:3001/api';
   const url = `${api_url}${endpoint}`;
   const body = JSON.stringify(values)
   const options = {
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     method: 'POST',
     body
   };
   //store.dispatch(addItemType);
   return fetch(url, options).then(jsonify).then(item => dispatch ? dispatch(callback(item)) : callback(item))
 }

 const submit = (values, dispatch, props) => {
   console.log('submit')
   return handlePost({endpoint: '/itemgroups', values, callback: addItemGroup, dispatch})
 }

 const submitSuccess = (values, dispatch, props) => props.toggle(props.modal);

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
AddItemGroup = reduxForm({
  form: 'addItemGroup',  // a unique identifier for this form
  validate: validate,
  onSubmit: submit,
  onSubmitSuccess: submitSuccess
})(AddItemGroup)

export default connect(mapStateToProps)(AddItemGroup)
