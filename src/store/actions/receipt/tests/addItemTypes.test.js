import { ADD_ITEMTYPES } from 'store/constants';
import { addItemTypes } from 'store/actions';

describe('actions/addItemTypes', () => {
  it('should create an action to add item types', () => {
    const expectedAction = {
      type: ADD_ITEMTYPES,
      itemTypes
    }
    expect(addItemTypes(itemTypes)).toEqual(expectedAction)
  })
});

const itemTypes = [
  {
    "_id": "5a16d5717a629e52b55b053f",
    "name": "RUOKA",
    "group": "5a16d5217a629e52b55b053a",
    "__v": 0
  },
  {
    "_id": "5a16d5797a629e52b55b0540",
    "name": "HERKUT",
    "group": "5a16d5217a629e52b55b053a",
    "__v": 0
  },
  {
    "_id": "5a16d5997a629e52b55b0541",
    "name": "PEHMOPAPERIT",
    "group": "5a16d54b7a629e52b55b053c",
    "__v": 0
  },
  {
    "_id": "5a16d5a97a629e52b55b0542",
    "name": "SIIVOUSTARVIKKEET",
    "group": "5a16d54b7a629e52b55b053c",
    "__v": 0
  },
  {
    "_id": "5a16d5b77a629e52b55b0543",
    "name": "HYGIENIA",
    "group": "5a16d54b7a629e52b55b053c",
    "__v": 0
  },
  {
    "_id": "5a16d5c87a629e52b55b0544",
    "name": "ALKOHOLI",
    "group": "5a16d5347a629e52b55b053b",
    "__v": 0
  },
  {
    "_id": "5a16d5cf7a629e52b55b0545",
    "name": "TUPAKKA",
    "group": "5a16d5347a629e52b55b053b",
    "__v": 0
  },
  {
    "_id": "5a16d5dc7a629e52b55b0546",
    "name": "VAUVANRUOKA",
    "group": "5a16d5517a629e52b55b053d",
    "__v": 0
  },
  {
    "_id": "5a16d5ec7a629e52b55b0547",
    "name": "VAUVAN TARVIKKEET",
    "group": "5a16d5517a629e52b55b053d",
    "__v": 0
  },
  {
    "_id": "5a16d6217a629e52b55b0549",
    "name": "PANTIT",
    "group": "5a16d61a7a629e52b55b0548",
    "__v": 0
  },
  {
    "_id": "5a16d70c7a629e52b55b0568",
    "name": "MUOVIKASSI",
    "group": "5a16d7047a629e52b55b0567",
    "__v": 0
  },
  {
    "_id": "5a16dc094fd336532d8100f1",
    "name": "VAATTEET",
    "group": "5a16d5617a629e52b55b053e",
    "__v": 0
  },
  {
    "_id": "5a16dc4e4fd336532d8100f2",
    "name": "KUKAT JA TARVIKKEET",
    "group": "5a16d5617a629e52b55b053e",
    "__v": 0
  },
  {
    "_id": "5a1cecb8cd7eaa175bc6ba19",
    "group": "5a16d5617a629e52b55b053e",
    "name": "KYNTTILÄT",
    "__v": 0
  },
  {
    "_id": "5a1ceccacd7eaa175bc6ba1c",
    "group": "5a16d5617a629e52b55b053e",
    "name": "SÄHKÖTARVIKKEET",
    "__v": 0
  },
  {
    "_id": "5a1ced01cd7eaa175bc6ba2c",
    "group": "5a16d5617a629e52b55b053e",
    "name": "SISUSTUS",
    "__v": 0
  },
  {
    "_id": "5a1ced31cd7eaa175bc6ba31",
    "group": "5a16d5517a629e52b55b053d",
    "name": "LELUT",
    "__v": 0
  },
  {
    "_id": "5a1d50ccc3ceb803dc3542a5",
    "name": "RUUANLAITTOTARVIKKEET",
    "group": "5a16d54b7a629e52b55b053c",
    "__v": 0
  },
  {
    "_id": "5a4c6b234be96f63c18cbc67",
    "group": "5a4c6b184be96f63c18cbc66",
    "name": "BENSIINI",
    "__v": 0
  }
]
