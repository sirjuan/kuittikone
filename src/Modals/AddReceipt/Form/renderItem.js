import React from 'react'
import { Fields } from 'redux-form'
import { renderItemTypeSelect } from 'utils/form'

const renderItem = ({index, item, stripe, itemTypes}) => (
  <tr key={index} className={index % 2 === 0 ? stripe : ''}>
    <td style={{whiteSpace: 'nowrap'}}>{item.name}</td>
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
  </tr>
);

export default renderItem;
