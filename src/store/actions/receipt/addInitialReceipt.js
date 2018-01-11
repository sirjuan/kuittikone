import { ADD_INITIAL_RECEIPT } from 'store/constants'

export const addInitialReceipt = receipt => ({
  type: ADD_INITIAL_RECEIPT,
  receipt
});
