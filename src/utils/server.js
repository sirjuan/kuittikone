import { handleError, jsonify } from 'utils';

const API_URL = 'http://localhost:3001/api';

export const handleFetchError = (response) => {
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response;
}

// May be deprecated
export const postData = ({ endpoint, values }) => {
  const url = `${API_URL}${endpoint}`;

  const body = values instanceof FormData ? values : JSON.stringify(values)
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body
  };
  return fetch(url, options).then(handleFetchError)
}

export const post = ({ endpoint, values }) => {
  const url = `${API_URL}${endpoint}`;
  const isFormData = values instanceof FormData
  const body = isFormData ? values : JSON.stringify(values)
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  const options = {
    ...!isFormData && {headers},
    method: 'POST',
    body
  };
  return fetch(url, options).then(handleFetchError)
}

export const get = (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`
  return fetch(url, options)
    .then(handleFetchError)
    .then(jsonify)
    .catch(handleError)
}
