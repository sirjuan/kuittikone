import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Fields } from 'redux-form'
import { renderItemTypeSelect } from '../../utils/form'
import { toggleModal } from '../actions'
import { Table } from 'reactstrap'

class ItemTable extends Component {

  toggleModal = () => this.props.dispatch(toggleModal('addItemType'));

  render = () => {
    const { itemTypes, items, total} = this.props;
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Tavara</th>
            <th colSpan={2}>Lkm</th>
            <th>Yks.Hinta</th>
            <th>Hinta</th>
            <th>Tyyppi</th>
            <th>Tyyppi</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.unit}</td>
              <td>{item.unitPrice}</td>
              <td>{item.price}</td>
              <td width="300">
                <Fields
                  names={[`items[${index}].type`, `items[${index}]._id`]}
                  component={renderItemTypeSelect}
                  props={{item, itemTypes}}
                />
              </td>
              <td>
                <Button outline small color="primary" onClick={this.toggleModal}>Lisää tyyppi</Button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}></td>
            <th>Yhteensä</th>
            <td>{total}</td>
          </tr>
        </tbody>
      </Table>
  )}
}

const mapStateToProps = state => {
  const { itemTypes } = state;
  return { itemTypes };
}

export default connect(mapStateToProps)(ItemTable);
