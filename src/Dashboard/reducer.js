import { ADD_TOP10_ITEMS } from './actions'

export const top10ItemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TOP10_ITEMS: return action.top10Items
    default: return state
  }
}
