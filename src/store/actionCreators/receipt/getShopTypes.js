import { addShopTypes } from 'store/actions';
import { get } from 'utils/server';

export const getShopTypes = () => dispatch => {
  get('/shoptypes')
    .then(array => dispatch(addShopTypes(array)))
}
