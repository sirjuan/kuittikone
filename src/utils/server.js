export const handleError = (response) => {
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response;
}

export const post = ({ endpoint, values }) => {
  const api_url = 'http://localhost:3001/api';
  const url = `${api_url}${endpoint}`;
  const body = JSON.stringify(values)
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body
  };
  return fetch(url, options).then(handleError)
}
