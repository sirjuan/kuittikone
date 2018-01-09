import {
  ADD_ITEMGROUP,
  ADD_ITEMGROUPS,
} from 'store/constants';

export const itemGroups = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEMGROUPS: return action.itemGroups
    case ADD_ITEMGROUP: return [ ...state, action.itemGroup ]
    default: return state
  }
}
