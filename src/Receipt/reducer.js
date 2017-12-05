import {
  ADD_ITEMGROUP,
  ADD_ITEMTYPE,
  LOAD_FORM,
  ADD_INITIAL_RECEIPT,
  ADD_SHOP_DETAILS,
  //SHOP_NOT_FOUND,
  ADD_ITEM_DETAILS,
  ADD_INITIAL_ITEMS,
  ADD_ITEMTYPES,
  ADD_SHOPTYPES,
  ADD_ITEMGROUPS,
  ADD_SHOPTYPE,
  CLEAR_NEW_RECEIPT
} from './actions';

const addDetails = (state, action) => {
  const items = state.map(item => {
    const found = action.find(i => i.name === item.name)
    return found ? { ...item, ...found } : item;
  });
  return items;
}

export const receiptReducer = (state = { }, action) => {
  switch (action.type) {
    case ADD_INITIAL_RECEIPT: return action.receipt
    case ADD_SHOP_DETAILS: return { ...state, shop: { ...action.shop } }
    case ADD_SHOPTYPE: return { ...state, shop: { ...state.shop, type: action.shopType } }
    case CLEAR_NEW_RECEIPT: return {}
    case ADD_INITIAL_ITEMS: return { ...state, items: action.items }
    case ADD_ITEM_DETAILS: return { ...state, items: addDetails(state.items, action.items)}
    case LOAD_FORM: return state
    default: return state
  }
}

export const itemTypesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEMTYPES: return action.itemTypes
    case ADD_ITEMTYPE: return [ ...state, action.itemType ]
    default: return state
  }
}

export const itemGroupsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEMGROUPS: return action.itemGroups
    case ADD_ITEMGROUP: return [ ...state, action.itemGroup ]
    default: return state
  }
}

export const shopTypesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SHOPTYPES: return action.shopTypes
    case ADD_SHOPTYPE: return [...state, action.shopType]
    default: return state
  }
}
