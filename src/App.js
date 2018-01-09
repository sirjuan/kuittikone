import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './Main';
import store, { dispatch } from 'store';
import { getShopTypes, getItemTypes, getItemGroups } from 'store/actionCreators';

class App extends Component {

  componentWillMount() {
    dispatch(getItemTypes())
    dispatch(getItemGroups())
    dispatch(getShopTypes())
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
