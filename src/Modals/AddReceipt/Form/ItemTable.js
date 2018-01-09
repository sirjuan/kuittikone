import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import { toggleModal } from 'store/actions'
import renderItem from './renderItem';

class ItemTable extends Component {

  toggleModal = () => this.props.dispatch(toggleModal('addItemType'));

  render = () => {
    const { itemTypes, items, total, classes} = this.props;

    return (
      <Table striped style={{fontSize: '0.7rem'}}>
        <thead>
          <tr>
            <th>Tavara</th>
            <th colSpan={2}>Lkm</th>
            <th>Yks.Hinta</th>
            <th>Hinta</th>
            <td><b>Tyyppi</b> <Button className={classes.addButton} color='link' onClick={this.toggleModal}>Lisää</Button></td>
          </tr>
        </thead>
        <tbody className={`${classes.themedTable}`} >
          {items.map((item, index) => renderItem({index, item, stripe: classes.stripedRow, itemTypes}))}
          <tr>
            <td colSpan={3}></td>
            <th>Yhteensä</th>
            <td>{total}</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
  )}
}

export default ItemTable;
