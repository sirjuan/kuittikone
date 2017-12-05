import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { jsonify, handleFetchError } from '../utils'
import { getShopTypes } from '../Receipt/actions'

class AddItemType extends React.PureComponent {

  toggle = () => this.props.toggle(this.props.modal);

  render = () => {
    const { invalid, submitting, handleSubmit, isOpen, className } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={this.toggle} className={className}>
        <ModalHeader toggle={this.toggle}>Lisää tuoteryhmä</ModalHeader>
        <ModalBody>
          <Field name='name' type="text" component='input' label="Name" />
        </ModalBody>
        <ModalFooter>
          <Button disabled={invalid} color={submitting ? 'secondary' : "primary"} onClick={handleSubmit}>Save</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const validate = (values, { shopTypes }) => {
  const errors = {}

  const exists = values.name && shopTypes.findIndex(i => i.name.toUpperCase() === values.name.toUpperCase()) >= 0;
  if (exists) errors.name = 'Type already exists'
  if (!values.name) { errors.name = 'Required' }

  return errors
}

const mapStateToProps = ({ shopTypes = [] }) => ({ shopTypes })

const handlePost = ({ endpoint, values }) => {
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
  return fetch(url, options)
  .then(handleFetchError)
  .then(jsonify)
}

const submit = (values, dispatch, props) => {
  return handlePost({ endpoint: '/shoptypes', values })
    .then(type => dispatch(getShopTypes()))
}

const submitSuccess = (values, dispatch, props) => props.toggle(props.modal);

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
AddItemType = reduxForm({
  form: 'addShopType',  // a unique identifier for this form
  validate,
  onSubmit: submit,
  onSubmitSuccess: submitSuccess
})(AddItemType)

export default connect(mapStateToProps)(AddItemType)
