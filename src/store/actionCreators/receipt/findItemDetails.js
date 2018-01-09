import { addInitialItems, addItemDetails, loadForm } from 'store/actions';
import { get } from 'utils/server';

export const findItemDetails = (items) => (dispatch, getState) => {
  dispatch(addInitialItems(items))
  const url = `/items/search?items=${encodeURIComponent(items.map(i => i.name).join(';'))}`
  get(url)
    .then(found => found.length > 0 && dispatch(addItemDetails(found)))
    .then(joo => setTimeout(() => dispatch(loadForm(),200)))
}
