import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Fields } from 'redux-form'
import { renderItemTypeSelect } from '../utils/form'
import { toggleModal } from '../Modals/actions'

class Items extends Component {

  toggleModal = () => this.props.dispatch(toggleModal('addItemType'));

  render = () => {
    const { items, itemTypes } = this.props;
    return (
      <span>
        {items.map((item, i) => {
          return (
        <tr key={i}>
          <td>{item.name}</td>
          <td>{item.qty}</td>
          <td>{item.unit}</td>
          <td>{item.unitPrice}</td>
          <td>{item.price}</td>
          <td width="300">
            <Fields
              names={[`items[${i}].type`, `items[${i}]._id`]}
              component={renderItemTypeSelect}
              props={{item, itemTypes}}
            />
          </td>
          <td>
            <Button outline small color="primary" onClick={this.toggleModal}>Lisää tyyppi</Button>
          </td>
        </tr>
        )})}
      </span>

  )}
}

export default Items;
