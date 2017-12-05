import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.css';
import { Button } from 'reactstrap';
import { processPage } from '../utils';
import Modals from '../Modals'
import Dashboard from '../Dashboard'
import PDFJS from 'pdfjs-dist';
import { addInitialReceipt, findShopDetails, findItemDetails } from '../Receipt/actions';
import { toggleModal } from '../Modals/actions'
import store from '../store';
import { connect } from 'react-redux'

class App extends Component {

  toggleAddReceipt = () => store.dispatch(toggleModal('addReceipt'));

  render = () => {
    return (
      <div className="App">
        <Modals />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button onClick={this.toggleAddReceipt}>Lisää kuitti</Button>
          <h1 className="App-title">JUu</h1>
        </header>
        <Dashboard />
      </div>
    );
  }
}

const mapStateToProps = state => {
   const { formLoaded } = state;
   return { formLoaded };
 }


export default connect(mapStateToProps)(App);
