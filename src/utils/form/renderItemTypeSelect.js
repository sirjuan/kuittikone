import React from 'react';
import Select from 'react-select';
import { put } from 'utils/server';
import { modifyValue, findChangedItem } from 'utils/form';

const renderItemTypeSelect = ({ itemTypes = [], items = [], item, names }) => {
  // Filter out empty elements in items-array, there will be only one left. Destructure it and the resulting object.
  const [{
    type: { input: { value: typeValue, onChange: typeChange } },
    _id: { input: { value: _id, onChange: idChange } }
  }] = items.filter(item => item);

  // Construct options in the manner react-select wants it
  const options = itemTypes.map(modifyValue);

  // We need to modify also the value from redux-form
  const selectValue = modifyValue(typeValue);

  const handleChange = (changed = {}) => {
    if (!selectValue || changed.value !== selectValue.value) {
      // Create or modify item in API (if an item did not have type before, it does not yet exist in db)
      put({endpoint: '/items', values: { ...item, type: changed.value }})
        .then(result => {
          typeChange(findChangedItem(changed, itemTypes)); // Item type has surely changed, so dispatch change
          if (_id !== result._id) idChange(result._id); // But _id has only changed if it didn't exist before
        })
    }
  }

  return (
    <div>
        <Select
          name="form-field-name"
          value={selectValue}
          options={options}
          onChange={handleChange}
          clearable={false}
          placeholder='Valitse...'
        />
    </div>
)}

export default renderItemTypeSelect;
