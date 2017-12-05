import { handleError, jsonify } from '../utils';
import { post } from '../utils/server';

export const ADD_INITIAL_RECEIPT = 'ADD_INITIAL_RECEIPT';
export const ADD_SHOP_DETAILS = 'ADD_SHOP_DETAILS';
//export const SHOP_NOT_FOUND = 'SHOP_NOT_FOUND';
export const ADD_ITEM_DETAILS = 'ADD_ITEM_DETAILS';
export const ADD_INITIAL_ITEMS = 'ADD_INITIAL_ITEMS';
export const ADD_ITEMTYPES = 'ADD_ITEMTYPES';
export const ADD_ITEMGROUPS = 'ADD_ITEMGROUPS';
export const ADD_SHOPTYPES = 'ADD_SHOPTYPES';
export const LOAD_FORM = 'LOAD_FORM';
export const ADD_ITEMTYPE = 'ADD_ITEMTYPE';
export const ADD_ITEMGROUP = 'ADD_ITEMGROUP';
export const ADD_SHOPTYPE = 'ADD_SHOPTYPE';
export const CLEAR_NEW_RECEIPT = 'CLEAR_NEW_RECEIPT';

const api_url = 'http://localhost:3001/api';

export const addInitialReceipt = receipt => ({ type: ADD_INITIAL_RECEIPT, receipt })
const addShopDetails = shop => ({ type: ADD_SHOP_DETAILS, shop });
//const shopNotFound = name => ({ type: SHOP_NOT_FOUND, name });
const addInitialItems = items => ({ type: ADD_INITIAL_ITEMS, items });
const addItemDetails = items => ({ type: ADD_ITEM_DETAILS, items })
const addItemTypes = itemTypes => ({ type: ADD_ITEMTYPES, itemTypes })
const addItemGroups = itemGroups => ({ type: ADD_ITEMGROUPS, itemGroups })
const addShopTypes = shopTypes =>({ type: ADD_SHOPTYPES, shopTypes })
export const loadForm = () => ({ type: LOAD_FORM });
export const addItemType = (itemType) => ({ type: ADD_ITEMTYPE, itemType })
export const addItemGroup = (itemGroup) => ({ type: ADD_ITEMGROUP, itemGroup })
export const addShopType = (shopType) => ({ type: ADD_SHOPTYPE, shopType })
export const clearNewReceipt = () => ({ type: CLEAR_NEW_RECEIPT });

export const findShopDetails = (shop) => (dispatch, getState) => {
  const url = `${api_url}/shops?name=${shop.name}`
  fetch(url)
    .then(jsonify)
    .then(shops => {
      if (shops.length === 0) {
        dispatch(findShopType(shop.name))
      } else {
        dispatch(addShopDetails(shops[0]))
        dispatch(getShopType(shops[0].type))
      }
    })
    .catch(handleError)
}

export const findItemDetails = (items) => (dispatch, getState) => {
  dispatch(addInitialItems(items))
  const url = `${api_url}/items/search?items=${encodeURIComponent(items.map(i => i.name).join(';'))}`
  console.log(url)
  fetch(url)
    .then(jsonify)
    .then(found => found.length > 0 && dispatch(addItemDetails(found)))
    .then(joo => setTimeout(() => dispatch(loadForm(),200)))
    .catch(handleError)
}

export const getItemTypes = () => dispatch => {
  const url = `${api_url}/itemtypes`
  fetch(url)
    .then(jsonify)
    .then(array => dispatch(addItemTypes(array)))
    .catch(handleError)
}

export const getItemGroups = () => dispatch => {
  const url = `${api_url}/itemgroups`
  fetch(url)
    .then(jsonify)
    .then(array => dispatch(addItemGroups(array)))
    .catch(handleError)
}

export const getShopTypes = () => dispatch => {
  const url = `${api_url}/shoptypes`
  fetch(url)
    .then(jsonify)
    .then(array => dispatch(addShopTypes(array)))
    .catch(handleError)
}

export const findShopType = name => dispatch => {
  const url = `${api_url}/shoptypes/search?name=${name}`
  fetch(url)
    .then(jsonify)
    .then(types => {
      if (types.length) {
        const type = types[0];
        console.log('*********************FINDSHOPTYPE************************')
        console.log(type)
        dispatch(addShopType(type))
        post({ endpoint: '/shops', values: { name, type: type._id }})
        .then(res => console.log('*******POSTSHOP******',res))
        .then(jsonify)
        .then(shop => dispatch(addShopDetails(shop)))
        .catch(e => console.log(e))
      }
      else {
        post('/shops', { name }).catch(e => console.log(e))
      }

      //dispatch(loadForm())
    })
    .catch(handleError)
}

export const getShopType = id => dispatch => {
  const url = `${api_url}/shoptypes?_id=${id}`
  fetch(url)
    .then(jsonify)
    .then(type => {
      dispatch(addShopType(type[0]))
      //dispatch(loadForm())
    })
    .catch(handleError)
}

export const addOrUpdate = ({item}) => dispatch => {

}
