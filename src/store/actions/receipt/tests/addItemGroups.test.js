import { ADD_ITEMGROUPS } from 'store/constants'
import { addItemGroups } from 'store/actions';

describe('actions/addItemGroups', () => {
  it('should create an action to add item groups', () => {
    const expectedAction = {
      type: ADD_ITEMGROUPS,
      itemGroups
    }
    expect(addItemGroups(itemGroups)).toEqual(expectedAction)
  })
});

const itemGroups = [
  {
    "_id": "5a16d5217a629e52b55b053a",
    "name": "ELINTARVIKKEET",
    "__v": 0
  },
  {
    "_id": "5a16d5347a629e52b55b053b",
    "name": "PÄIHTEET",
    "__v": 0
  },
  {
    "_id": "5a16d54b7a629e52b55b053c",
    "name": "TALOUSTAVARAT",
    "__v": 0
  },
  {
    "_id": "5a16d5517a629e52b55b053d",
    "name": "VAUVA",
    "__v": 0
  },
  {
    "_id": "5a16d5617a629e52b55b053e",
    "name": "KÄYTTÖTAVARAT",
    "__v": 0
  },
  {
    "_id": "5a16d61a7a629e52b55b0548",
    "name": "PANTIT",
    "__v": 0
  },
  {
    "_id": "5a16d7047a629e52b55b0567",
    "name": "OSTOSKASSIT",
    "__v": 0
  },
  {
    "_id": "5a4c6b184be96f63c18cbc66",
    "name": "AUTO",
    "__v": 0
  }
]
