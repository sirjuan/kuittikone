import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'reactstrap';
import { toggleModal } from 'store/actions'
import { dispatch } from 'store';

class Header extends Component {

  toggleAddReceipt = () => dispatch(toggleModal('addReceipt'));

  render = () => {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={this.toggleAddReceipt}>Lisää kuitti</Button>
        <h1 className="App-title">JUu</h1>
      </header>
    );
  }
}

export default Header;
