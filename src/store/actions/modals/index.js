import { TOGGLE_MODAL } from 'store/constants'

export const toggleModal = modal => ({
  type: TOGGLE_MODAL,
  modal
});
