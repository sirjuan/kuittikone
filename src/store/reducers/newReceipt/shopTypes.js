import {
  ADD_SHOPTYPES,
  ADD_SHOPTYPE,
} from 'store/constants';

export const shopTypes = (state = [], action) => {
  switch (action.type) {
    case ADD_SHOPTYPES: return action.shopTypes
    case ADD_SHOPTYPE: return [...state, action.shopType]
    default: return state
  }
}
