import { addShopDetails } from 'store/actions';
import { findShopType, getShopType } from 'store/actionCreators';
import { get } from 'utils/server';

export const findShopDetails = (shop) => (dispatch, getState) => {
  const url = `/shops?name=${shop.name}`
  get(url)
    .then(shops => {
      if (shops.length === 0) {
        dispatch(findShopType(shop.name))
      } else {
        dispatch(addShopDetails(shops[0]))
        dispatch(getShopType(shops[0].type))
      }
    })
}
