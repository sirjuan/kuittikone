import { ADD_SHOP_DETAILS } from 'store/constants'
import { addShopDetails } from 'store/actions';

describe('actions/addShopDetails', () => {
  it('should create an action to add shop details to new receipt', () => {
    const expectedAction = {
      type: ADD_SHOP_DETAILS,
      shop
    }
    expect(addShopDetails(shop)).toEqual(expectedAction)
  })
});

const shop = {
  "_id": "5a1d06429dd8941bc00474b4",
  "name": "PRISMA LIMINGANTULLI",
  "type": "5a0eb2fa5b07ae06c93ac473",
  "__v": 0
}
