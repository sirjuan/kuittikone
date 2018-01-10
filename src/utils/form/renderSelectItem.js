import React from 'react';
import Select from 'react-select';
import { modifyValue, findChangedItem } from 'utils/form';

class renderSelectItem extends React.Component {

  handleChange = changed => {
    const { input: { value, onChange }, items = [] } = this.props;
    const current = modifyValue(value)
    if (!changed || !value || changed.value !== current.value) {
      onChange(findChangedItem(changed, items))
    }
  }

  render() {
    const { items = [], input = {}, label} = this.props;
    const options = items.map(modifyValue)
    const value = modifyValue(input.value)

    return (
      <Select
        value={value}
        options={options}
        onChange={this.handleChange}
        placeholder={label}
        clearable={false}
      />
    )
  }
}

export default renderSelectItem;
