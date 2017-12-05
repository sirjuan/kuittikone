import React from 'react';
import Select from 'react-select';
import { change } from 'redux-form'
import {jsonify, log } from '../../utils'

const renderSelectItem = (props) => {
  const { itemTypes = [], items = [], item, names } = props;
  const mappedItems = items.reduce((acc, item) => item ? {...acc,...item} : acc, {})
  const {type, _id} = mappedItems;
  const { input, meta: {dispatch} } = type;
  const options = itemTypes.map(item => ({ value: item._id, label: item.name }))
  const value = input.value._id ? {value: input.value._id, label: input.value.name} : undefined;
  const handleChange = changed => {
    if (!changed || !value || changed.value !== value.value) {
      const api_url = 'http://localhost:3001/api';
      const url = api_url + '/items'
      input.onChange(changed ? itemTypes.find((i) => i._id === changed.value) : '')
      const body = JSON.stringify({_id: _id.input.value, ...item, type: changed.value })
      const options = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body
      }
      fetch(url, options)
      .then(jsonify)
      .then(result => dispatch(change('newReceipt', `${names[0].split('.')[0]}._id`, result._id)))
      .catch(log)
    }
  }

  return (
    <div>
        <Select
          name="form-field-name"
          value={value}
          options={options}
          onChange={handleChange}
          placeholder='Valitse...'
        />
    </div>
)}

export default renderSelectItem;
