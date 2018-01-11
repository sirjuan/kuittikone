import { ADD_INITIAL_RECEIPT } from 'store/constants'
import { addInitialReceipt } from 'store/actions';

describe('actions/addInitialReceipt', () => {
  it('should create an action to add initial receipt', () => {
    const expectedAction = {
      type: ADD_INITIAL_RECEIPT,
      receipt
    }
    expect(addInitialReceipt(receipt)).toEqual(expectedAction)
  })
});

const receipt = {
  "shop": {
    "name": "S-MARKET YKKÖNEN TYRNÄVÄ",
    "type": {}
  },
  "date": "2017-09-25T04:33:00.000Z",
  "total": 11.52,
  "bonus": 11.52,
  "pdfId": "S-market Tyrnävä_2017-09-25"
}
