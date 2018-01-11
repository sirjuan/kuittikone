import { LOAD_FORM } from 'store/constants'
import { loadForm } from 'store/actions';

describe('actions/loadForm', () => {
  it('should create an action to indicate that form is loaded', () => {
    const expectedAction = {
      type: LOAD_FORM,
    }
    expect(loadForm()).toEqual(expectedAction)
  })
});
