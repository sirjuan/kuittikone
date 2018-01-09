import { addInitialReceipt } from 'store/actions';
import { findShopDetails, findItemDetails } from 'store/actionCreators';

export const handleReceiptInit = (payload, pdfId) => dispatch => {
  const { items, ...receipt } = payload;
  dispatch(addInitialReceipt({...receipt, pdfId}))
  dispatch(findShopDetails(receipt.shop))
  dispatch(findItemDetails(items))
}
