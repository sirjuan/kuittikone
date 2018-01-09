import { addShopType } from 'store/actions';
import { get } from 'utils/server';

export const getShopType = id => dispatch => {
  const url = `/shoptypes?_id=${id}`
  get(url)
    .then(type => {
      dispatch(addShopType(type[0]))
      //dispatch(loadForm())
    })
}
