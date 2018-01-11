import { ADD_ITEMTYPE } from 'store/constants'
import { addItemType } from 'store/actions';

describe('actions/addItemType', () => {
  it('should create an action to add item type to an item in new receipt', () => {
    const expectedAction = {
      type: ADD_ITEMTYPE,
      itemType
    }
    expect(addItemType(itemType)).toEqual(expectedAction)
  })
});

const itemType = {
  "__v": 0,
  "name": "GDGDF",
  "group": "5a16d5217a629e52b55b053a",
  "_id": "5a575bee319ecc01d7a5fcd4"
}
