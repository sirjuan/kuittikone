import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { renderSelectItem } from '../utils/form'
import { jsonify } from '../utils'
import { addItemType } from '../Receipt/actions'
import { toggleModal } from './actions';

class AddItemType extends React.Component {

  toggleAddItemGroup = () => this.props.dispatch(toggleModal('addItemGroup'));
  toggle = () => this.props.toggle(this.props.modal);

  render = () => {
    const { itemGroups = [], invalid, submitting, handleSubmit, isOpen, className } = this.props;

    return (
      <form>
        <Modal isOpen={isOpen} toggle={this.toggle} className={className}>
          <ModalHeader toggle={this.toggle}>Lisää tuoteryhmä</ModalHeader>
          <ModalBody>
            <Field name='name' type="text" component='input' label="Name" />
            <Field
              name='group'
              type="select"
              component={renderSelectItem}
              label="Valitse ryhmä"
              items={itemGroups}
            />
            <Button onClick={this.toggleAddItemGroup}>Lisää tyyppi</Button>
          </ModalBody>
          <ModalFooter>
            <Button disabled={invalid} color={submitting ? 'secondary' : "primary"} onClick={handleSubmit}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </form>
    );
  }
}

const validate = (values, { itemTypes }) => {
  const errors = {}

  const exists = values.name && itemTypes.findIndex(i => i.name.toUpperCase() === values.name.toUpperCase()) >= 0;
  if (exists) errors.name = 'Type already exists'
  if (!values.group) { errors.group = 'Required' }
  if (!values.name) { errors.name = 'Required' }

  return errors
}

const mapStateToProps = ({ itemTypes = [], itemGroups = [], ...state }) => ({ itemTypes, itemGroups })

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
  return handlePost({endpoint: '/itemtypes', values, callback: addItemType, dispatch})
}

const submitSuccess = (values, dispatch, props) => props.toggle(props.modal);

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
AddItemType = reduxForm({
  form: 'addItemType',  // a unique identifier for this form
  validate,
  onSubmit: submit,
  onSubmitSuccess: submitSuccess
})(AddItemType)

export default connect(mapStateToProps)(AddItemType)
