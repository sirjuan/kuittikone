import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './Main';
import store from './store';
import { getShopTypes, getItemTypes, getItemGroups } from './Receipt/actions';

class App extends Component {

  componentWillMount() {
    store.dispatch(getItemTypes())
    store.dispatch(getItemGroups())
    store.dispatch(getShopTypes())
  }

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
