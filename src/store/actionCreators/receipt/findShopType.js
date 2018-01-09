import { addShopDetails, addShopType } from 'store/actions';
import { handleError, jsonify } from 'utils';
import { post } from 'utils/server'

const api_url = 'http://localhost:3001/api';

export const findShopType = name => dispatch => {
  const url = `${api_url}/shoptypes/search?name=${name}`
  fetch(url)
    .then(jsonify)
    .then(types => {
      if (types.length) {
        const type = types[0];
        dispatch(addShopType(type))
        post({ endpoint: '/shops', values: { name, type: type._id }})
        .then(jsonify)
        .then(shop => dispatch(addShopDetails(shop)))
        .catch(handleError)
      }
      else {
        post('/shops', { name }).catch(handleError)
      }

      //dispatch(loadForm())
    })
    .catch(handleError)
}
