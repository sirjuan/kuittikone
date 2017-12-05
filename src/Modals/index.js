import React from 'react';

import { dispatch } from '../store';

import { toggleModal } from './actions';

import AddReceipt from './AddReceipt'
import AddItemGroup from './AddItemGroup';
import AddItemType from './AddItemType';
import AddShopType from './AddShopType';

import { connect } from 'react-redux'

class Modals extends React.Component {

  toggleModal(type) {
    dispatch(toggleModal(type))
  }

  render() {
    const { modals, formLoaded } = this.props;
    return (
      <div>
        <AddReceipt modal='addReceipt' isOpen={modals.addReceipt} toggle={this.toggleModal} formLoaded={formLoaded} size='lg'/>
        <AddItemType modal='addItemType' isOpen={modals.addItemType} toggle={this.toggleModal} />
        <AddItemGroup modal='addItemGroup' isOpen={modals.addItemGroup} toggle={this.toggleModal} />
        <AddShopType modal='addShopType' isOpen={modals.addShopType} toggle={this.toggleModal} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { modals, formLoaded } = state;
  return { modals, formLoaded };
}

export default connect(mapStateToProps)(Modals);
