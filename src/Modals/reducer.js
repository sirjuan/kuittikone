import { TOGGLE_MODAL } from './actions';

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: return { ...state, [action.modal]: !state[action.modal] }
    default: return state;
  }
};

export default modalReducer;
