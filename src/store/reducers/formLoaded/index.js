import { LOAD_FORM, CLEAR_NEW_RECEIPT } from 'store/constants'

export const formLoaded = (state = false, action) => {
  switch (action.type) {
    case LOAD_FORM: return !state;
    case CLEAR_NEW_RECEIPT: return false;
    default: return state
  }
}
