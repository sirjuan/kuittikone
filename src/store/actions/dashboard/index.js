import { ADD_TOP10_ITEMS } from 'store/constants'

export const addTop10Items = (top10Items) => ({
  type: ADD_TOP10_ITEMS,
  top10Items
});
