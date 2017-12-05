import { jsonify, log } from '../utils'

export const ADD_TOP10_ITEMS = 'ADD_TOP10_ITEMS';

const addTop10Items = (top10Items) => ({type: ADD_TOP10_ITEMS, top10Items });

const api_url = 'http://localhost:3001/api';

export const getTop10Items = () => dispatch => {
  const url = `${api_url}/purchases/top10`;
  console.log('haetaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaan');
  console.log(url)
  fetch(url)
  .then(jsonify)
  .then(items => dispatch(addTop10Items(items)))
  .catch(log)
}
