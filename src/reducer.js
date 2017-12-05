import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import {receiptReducer, itemTypesReducer, itemGroupsReducer, shopTypesReducer } from './Receipt/reducer';
import { top10ItemsReducer } from './Dashboard/reducer'

import modals from './Modals/reducer'

export const reducer = (state = false, action) => {
  switch (action.type) {
    case 'LOAD_FORM': return true;
    case 'CLEAR_NEW_RECEIPT': return false;
    default: return state
  }
}

const rootReducer = combineReducers({
  formLoaded: reducer,
  newReceipt: receiptReducer,
  top10Items: top10ItemsReducer,
  modals,
  itemTypes: itemTypesReducer,
  itemGroups: itemGroupsReducer,
  shopTypes: shopTypesReducer,
  form,
})

export default rootReducer
