export const getValueByKey = (obj, itemName) => ({...obj[itemName]});
export const formatNumber = number => number % 1 === 0 ? number : number.toFixed(2);
export const getLastElement = arr => Array.isArray(arr) ? arr[arr.length - 1] : undefined;
