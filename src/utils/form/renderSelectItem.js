import React from 'react';
import Select from 'react-select';

class renderSelectItem extends React.Component {

  state = { waitingForNewOption: {} }

  componentWillReceiveProps(nextProps) {
    const { input, items = [] } = nextProps;
    if (items[items.length-1] !== this.props.items[this.props.items.length-1]) {
      input.onChange(items[items.length-1])
    }
  }

  handleChange = changed => {
    const { input, items = [] } = this.props;
    const value = input.value._id ? {value: input.value._id, label: input.value.name} : undefined;
    if (!changed || !value || changed.value !== value.value) {
      input.onChange(changed ? items.find((i) => i._id === changed.value) : '')
    }
  }

  handleNew = (changed) => {
    this.props.handleNewOption(this.props.modal)
  };

  render() {

    const { items = [], input, label} = this.props;
    const options = items.map(item => ({ value: item._id, label: item.name }))
    const value = input.value._id ? {value: input.value._id, label: input.value.name} : undefined;

    return (
      <div>
        <Select
          name="form-field-name"
          value={value}
          options={options}
          onChange={this.handleChange}
          placeholder={label}
          clearable={false}
        />
        <span className="input-group-btn">
      <button className="btn btn-sm btn-default btn-clear"
              type="button"
              onClick={() => this.handleNew()}
              title="Quitar">
        <span className="icon-cerrar"></span>
      </button>
    </span>
      </div>
    )
  }
}

export default renderSelectItem;
