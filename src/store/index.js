import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

const middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger({collapsed: true}));
}

const store = createStore( rootReducer, applyMiddleware(...middleware) );

export default store;

export const dispatch = store.dispatch;
