import React from 'react';
import Select from 'react-select';

const renderSelectItem = (props) => {
  const { items = [], input, label } = props;
  const options = items.map(item => ({ value: item._id, label: item.name }))
  const value = input.value._id ? {value: input.value._id, label: input.value.name} : undefined;
  const handleChange = changed => {
    if (!changed || !value || changed.value !== value.value) {
      input.onChange(changed ? items.find((i) => i._id === changed.value) : '')
    }
  }

  return (
    <div>
      <Select
        name="form-field-name"
        value={value}
        options={options}
        onChange={handleChange}
        placeholder={label}
      />
    </div>
)}

export default renderSelectItem;
