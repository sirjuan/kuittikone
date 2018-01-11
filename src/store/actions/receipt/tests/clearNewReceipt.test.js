import { CLEAR_NEW_RECEIPT } from 'store/constants'
import { clearNewReceipt } from 'store/actions';

describe('actions/clearNewReceipt', () => {
  it('should create an action to clear new receipt', () => {
    const expectedAction = {
      type: CLEAR_NEW_RECEIPT,
    }
    expect(clearNewReceipt()).toEqual(expectedAction)
  })
});
