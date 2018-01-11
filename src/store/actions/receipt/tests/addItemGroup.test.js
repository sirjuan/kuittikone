import { ADD_ITEMGROUP } from 'store/constants'
import { addItemGroup } from 'store/actions';

describe('actions/addItemGroup', () => {
  it('should create an action to add item group to an item in new receipt', () => {
    const expectedAction = {
      type: ADD_ITEMGROUP,
      itemGroup
    }
    expect(addItemGroup(itemGroup)).toEqual(expectedAction)
  })
});

const itemGroup = {
  "__v": 0,
  "name": "JOO",
  "_id": "5a575744e35ef600b49051f1"
}
