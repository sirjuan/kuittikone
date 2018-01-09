import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { toggleModal, loadForm } from 'store/actions'
import validate from './validate';
import { onSubmit, onSubmitFail } from './utils'
import ThemedForm from './ThemedForm'

class AddReceiptFormContainer extends React.Component  {
  toggleModal = () => this.props.dispatch(toggleModal('addShopType'));
  toggleForm = () => this.props.dispatch(loadForm());
  handleNewOption = (modal) => this.props.dispatch(toggleModal(modal));

  render = () => (
    <ThemedForm
      {...this.props}
      toggleShop={this.toggleModal}
      toggleForm={this.toggleForm}
      handleNewOption={this.handleNewOption}
    />
  );
}

const mapStateToProps = state => {
  const { itemGroups = [], itemTypes = [], shopTypes = [], form = {} } = state;
  const { newReceipt = {} } = form;
  const { values: formValues = {} } = newReceipt;
  const { shop = {} } = formValues;
  const { type = {} } = shop;
  const { primaryColor: primary, secondaryColor: secondary, thirdColor: third } = type;
  const colors = { primary, secondary, third };
  return { itemGroups, itemTypes, shopTypes, formValues, colors };
}

AddReceiptFormContainer = reduxForm({
  form: 'newReceipt',
  onSubmit,
  //onSubmitSuccess,
  onSubmitFail,
  validate,
  enableReinitialize: true,
})(AddReceiptFormContainer)

const mapFormStateToProps = state => ({ initialValues: state.newReceipt  })

AddReceiptFormContainer = connect(mapFormStateToProps, { load: loadForm })(AddReceiptFormContainer)

export default connect(mapStateToProps)(AddReceiptFormContainer)
