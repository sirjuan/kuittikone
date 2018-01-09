import {
  LOAD_FORM,
  ADD_INITIAL_RECEIPT,
  ADD_SHOP_DETAILS,
  ADD_ITEM_DETAILS,
  ADD_INITIAL_ITEMS,
  ADD_SHOPTYPE,
  CLEAR_NEW_RECEIPT
} from 'store/constants';

const addDetails = (state, action) => {
  const items = state.map(item => {
    const found = action.find(i => i.name === item.name)
    return found ? { ...item, ...found } : item;
  });
  return items;
}

export const newReceipt = (state = { }, action) => {
  switch (action.type) {
    case CLEAR_NEW_RECEIPT: return {}
    case ADD_INITIAL_RECEIPT: return action.receipt
    case ADD_SHOP_DETAILS: return { ...state, shop: { ...action.shop } }
    case ADD_SHOPTYPE: return { ...state, shop: { ...state.shop, type: action.shopType } }
    case ADD_INITIAL_ITEMS: return { ...state, items: action.items }
    case ADD_ITEM_DETAILS: return { ...state, items: addDetails(state.items, action.items)}
    case LOAD_FORM: return state
    default: return state
  }
}
