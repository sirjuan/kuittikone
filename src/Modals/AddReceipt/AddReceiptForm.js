import React from 'react'
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm, stopSubmit } from 'redux-form'
import SubmissionError from 'redux-form/lib/SubmissionError'
import { Button } from 'reactstrap'
import { loadForm, clearNewReceipt } from '../../Receipt/actions'
import { toggleModal } from '../actions'
import { validate } from './validate';
import { renderSelectItem } from '../../utils/form'
import { post } from '../../utils/server'
import ItemTable from './ItemTable';
import moment from 'moment'
import Simplert from '../../Simplert'

import 'moment/locale/fi';
moment.locale('fi')

const renderShopType = (props) => renderSelectItem(props)

class AddReceiptForm extends React.Component  {

  toggleModal = () => this.props.dispatch(toggleModal('addShopType'));
  render = () => {

    const { handleSubmit, error, invalid, submitting, formValues = {}, itemTypes, shopTypes, submitFailed, clearSubmitErrors } = this.props;
    const { items = [], shop = {}, total, bonus, date } = formValues;

    return (
      <form onSubmit={handleSubmit}>
        <Simplert
          showSimplert={ error && submitFailed }
          type='fail'
          title='Kuitin tallennus epäonnistui'
          message={error && error._error.message == 409 ? 'Kuitti on jo olemassa' : 'Jotain pahaa tapahtui'}
          onClose={clearSubmitErrors}
          onOverlayClose={clearSubmitErrors}
          //disableOverlayClick='true'
        />
        <h1>{shop.name}</h1>
        <h3>{moment(date).format('LLLL')}</h3>
        <p>Yhteensä: {total}€, Bonukseen: {bonus}€ </p>
        <Field name='shop.type' type="text" component={renderShopType} items={shopTypes} label="Valitse kauppatyyppi..." />
        <Button outline small color="primary" onClick={this.toggleModal}>Lisää tyyppi</Button>
        <FieldArray name="items" component={ItemTable} itemTypes={itemTypes} props={{items, total}} />
        <div>
          <Button onClick={handleSubmit} disabled={invalid || submitting}>Submit</Button>
          <button type="button" onClick={clearSubmitErrors}>Undo Changes</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  const { itemGroups = [], itemTypes = [], shopTypes = [], form = {} } = state;
  const { newReceipt = {} } = form;
  const { values: formValues = {} } = newReceipt;
  return { itemGroups, itemTypes, shopTypes, formValues };
}

const onSubmit = (body = {}, dispatch, props) => {
   const { shop, bonus, total, date, items = [] } = body;

   const purchases = items.map(item => ({
     qty: item.qty,
     unit: item.unit,
     unitPrice: item.unitPrice,
     price: item.price,
     item: item._id,
     date
   }));

   const values = { purchases, receipt: { shop, total, bonus, date } };

   return post({endpoint: '/receipts', values})
   .catch((error) =>{ throw new SubmissionError({ _error: error })})
}

const onSubmitSuccess = (values, dispatch, props) => {
  dispatch(props.destroy())
  dispatch(clearNewReceipt())
  dispatch(toggleModal('addNewReceipt'))
}

const onSubmitFail = (values, dispatch, error) => dispatch(stopSubmit('newReceipt', {_error: error.errors}))

AddReceiptForm = reduxForm({
  form: 'newReceipt',
  onSubmit,
  onSubmitSuccess,
  onSubmitFail,
  validate,
  enableReinitialize: true,
})(AddReceiptForm)

AddReceiptForm = connect(
  state => ({ initialValues: state.newReceipt  }),
  { load: loadForm }
)(AddReceiptForm)

export default connect(mapStateToProps)(AddReceiptForm)
