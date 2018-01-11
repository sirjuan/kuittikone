import { TOGGLE_MODAL } from 'store/constants'
import { toggleModal } from 'store/actions';

const modals = ['addReceipt', 'addItemType', 'addItemGroup','addShopType'];

describe('actions', () => {
  modals.forEach(modal => {
    it('should create an action to add Top10 items', () => {
      const expectedAction = {
        type: TOGGLE_MODAL,
        modal
      }
      expect(toggleModal(modal)).toEqual(expectedAction)
    })
  })
})
