import { ADD_INITIAL_ITEMS } from 'store/constants';

export const addInitialItems = items => ({
  type: ADD_INITIAL_ITEMS,
  items
});
