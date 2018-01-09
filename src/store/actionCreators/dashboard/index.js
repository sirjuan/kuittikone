import { get } from 'utils/server'
import { addTop10Items } from 'store/actions';

export const getTop10Items = () => dispatch => {
  get('/purchases/top10')
  .then(items => dispatch(addTop10Items(items)))
}
