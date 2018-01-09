import { TOGGLE_MODAL } from 'store/constants';

export const modals = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: return { ...state, [action.modal]: !state[action.modal] }
    default: return state;
  }
};
