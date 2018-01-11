import { ADD_SHOPTYPE } from 'store/constants'
import { addShopType } from 'store/actions';

describe('actions/addShopType', () => {
  it('should create an action to add shopType to shop in new receipt', () => {
    const expectedAction = {
      type: ADD_SHOPTYPE,
      shopType
    }
    expect(addShopType(shopType)).toEqual(expectedAction)
  })
});


const shopType = {
  "_id": "5a0eb3015b07ae06c93ac474",
  "name": "S-MARKET",
  "primaryColor": "#fce400",
  "secondaryColor": "#fce400",
  "thirdColor": "#002d58",
  "__v": 0
}
