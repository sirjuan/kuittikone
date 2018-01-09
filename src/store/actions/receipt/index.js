import {
  ADD_INITIAL_RECEIPT,
  ADD_SHOP_DETAILS,
  ADD_ITEM_DETAILS,
  ADD_INITIAL_ITEMS,
  ADD_ITEMTYPES,
  ADD_ITEMGROUPS,
  ADD_SHOPTYPES,
  LOAD_FORM,
  ADD_ITEMTYPE,
  ADD_ITEMGROUP,
  ADD_SHOPTYPE,
  CLEAR_NEW_RECEIPT,
} from 'store/constants'

export const addInitialReceipt = receipt => ({
  type: ADD_INITIAL_RECEIPT,
  receipt
})

export const addShopDetails = shop => ({
  type: ADD_SHOP_DETAILS,
  shop
});

export const addInitialItems = items => ({
  type: ADD_INITIAL_ITEMS,
  items
});

export const addItemDetails = items => ({
  type: ADD_ITEM_DETAILS,
  items
});

export const addItemTypes = itemTypes => ({
  type: ADD_ITEMTYPES,
  itemTypes
});

export const addItemGroups = itemGroups => ({
  type: ADD_ITEMGROUPS,
  itemGroups
});

export const addShopTypes = shopTypes =>({
  type: ADD_SHOPTYPES,
  shopTypes
});

export const addItemType = (itemType) => ({
  type: ADD_ITEMTYPE,
  itemType
});

export const addItemGroup = (itemGroup) => ({
  type: ADD_ITEMGROUP,
  itemGroup
});

export const addShopType = (shopType) => ({
  type: ADD_SHOPTYPE,
  shopType
});

export const loadForm = () => ({
  type: LOAD_FORM
});

export const clearNewReceipt = () => ({
  type: CLEAR_NEW_RECEIPT
});
