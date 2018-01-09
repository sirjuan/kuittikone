import {
  ADD_ITEMTYPE,
  ADD_ITEMTYPES,
} from 'store/constants';

export const itemTypes = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEMTYPES: return action.itemTypes
    case ADD_ITEMTYPE: return [ ...state, action.itemType ]
    default: return state
  }
}
