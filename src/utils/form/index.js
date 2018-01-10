import renderItemTypeSelect from './renderItemTypeSelect'
import renderSelectItem from './renderSelectItem';
export const modifyValue = item => item._id ? ({ value: item._id, label: item.name }) : undefined;
export const findChangedItem = (changed, list) => changed ? list.find((i) => i._id === changed.value) : ''

export { renderSelectItem, renderItemTypeSelect }
