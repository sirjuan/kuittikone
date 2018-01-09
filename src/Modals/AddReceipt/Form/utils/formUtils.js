import { stopSubmit } from 'redux-form'
import SubmissionError from 'redux-form/lib/SubmissionError'
import { toggleModal, clearNewReceipt } from 'store/actions'
import { post } from 'utils/server'

export const onSubmit = (body = {}, dispatch, props) => {
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

export const onSubmitSuccess = (values, dispatch, props) => {
  dispatch(props.destroy())
  dispatch(clearNewReceipt())
  dispatch(toggleModal('addNewReceipt'))
}

export const clearOnSuccess = (dispatch, destroy) => {
  dispatch(destroy())
  dispatch(clearNewReceipt())
  dispatch(toggleModal('addNewReceipt'))
}

export const onSubmitFail = (values, dispatch, error) => dispatch(stopSubmit('newReceipt', {_error: error.errors}))
