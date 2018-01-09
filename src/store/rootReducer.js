import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { formLoaded, newReceipt, itemTypes, itemGroups, shopTypes, top10Items, modals } from 'store/reducers';

const rootReducer = combineReducers({
  formLoaded,
  newReceipt,
  top10Items,
  modals,
  itemTypes,
  itemGroups,
  shopTypes,
  form,
})

export default rootReducer
