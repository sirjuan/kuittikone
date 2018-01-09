import React, { Component } from 'react';

import Modals from 'Modals'
import Header from './Header';
import Dashboard from 'Dashboard'

import './styles.css';

class Main extends Component {

  render = () => {
    return (
      <div className="App">
        <Modals />
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default Main;
