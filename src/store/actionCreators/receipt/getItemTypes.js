import { addItemTypes } from 'store/actions';
import { get } from 'utils/server';

export const getItemTypes = () => dispatch => {
  get('/itemtypes').then(array => dispatch(addItemTypes(array)))
}
