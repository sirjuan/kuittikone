export * from './common';

export const jsonify = item => item.json();

export const log = item => {
  console.log(item);
  return item;
}

export const handleError = e => console.error(e);

export const handleFetchError = (response) => {
    if (!response.ok) {
        throw Error(`${response.status}:${response.statusText}`);
    }
    return response;
}
