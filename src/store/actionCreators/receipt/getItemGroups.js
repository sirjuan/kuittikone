import { addItemGroups } from 'store/actions';
import { get } from 'utils/server';

export const getItemGroups = () => dispatch => {
  get('/itemGroups')
    .then(array => dispatch(addItemGroups(array)))
}
