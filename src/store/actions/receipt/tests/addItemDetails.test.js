import { ADD_ITEM_DETAILS } from 'store/constants'
import { addItemDetails } from 'store/actions';

describe('actions/addItemDetails', () => {
  it('should create an action to add item details to items in new receipt', () => {
    const expectedAction = {
      type: ADD_ITEM_DETAILS,
      items
    }
    expect(addItemDetails(items)).toEqual(expectedAction)
  })
});

const items = [
  {
    "_id": "5a16d67b7a629e52b55b0566",
    "__v": 0,
    "type": {
      "_id": "5a16d5717a629e52b55b053f",
      "name": "RUOKA",
      "group": "5a16d5217a629e52b55b053a",
      "__v": 0
    },
    "name": "BANAANI CHIQUITA"
  },
  {
    "_id": "5a16d7127a629e52b55b0569",
    "__v": 0,
    "type": {
      "_id": "5a16d70c7a629e52b55b0568",
      "name": "MUOVIKASSI",
      "group": "5a16d7047a629e52b55b0567",
      "__v": 0
    },
    "name": "MUOVIKASSI 40L HARMAA"
  },
  {
    "_id": "5a16d7147a629e52b55b056a",
    "__v": 0,
    "type": {
      "_id": "5a16d5717a629e52b55b053f",
      "name": "RUOKA",
      "group": "5a16d5217a629e52b55b053a",
      "__v": 0
    },
    "name": "JÄÄSALAATTI PAK"
  },
  {
    "_id": "5a18686c208c8002f1f222ff",
    "__v": 0,
    "type": {
      "_id": "5a16d5717a629e52b55b053f",
      "name": "RUOKA",
      "group": "5a16d5217a629e52b55b053a",
      "__v": 0
    },
    "name": "SNACK AUR.KUIV.TOMAATTI"
  },
  {
    "_id": "5a1868ca208c8002f1f22300",
    "__v": 0,
    "type": {
      "_id": "5a16d5797a629e52b55b0540",
      "name": "HERKUT",
      "group": "5a16d5217a629e52b55b053a",
      "__v": 0
    },
    "name": "SISU HORNA"
  },
  {
    "_id": "5a1868cd208c8002f1f22301",
    "__v": 0,
    "type": {
      "_id": "5a16d5717a629e52b55b053f",
      "name": "RUOKA",
      "group": "5a16d5217a629e52b55b053a",
      "__v": 0
    },
    "name": "RAHKAVAAHTO HEDELMÄ"
  },
  {
    "_id": "5a1868ce208c8002f1f22302",
    "__v": 0,
    "type": {
      "_id": "5a16d5717a629e52b55b053f",
      "name": "RUOKA",
      "group": "5a16d5217a629e52b55b053a",
      "__v": 0
    },
    "name": "MANSIKKARAHKA"
  },
  {
    "_id": "5a1868d1208c8002f1f22303",
    "__v": 0,
    "type": {
      "_id": "5a16d5717a629e52b55b053f",
      "name": "RUOKA",
      "group": "5a16d5217a629e52b55b053a",
      "__v": 0
    },
    "name": "RIISIVÄLIPALA TROOP HED"
  },
  {
    "_id": "5a1868d4208c8002f1f22304",
    "__v": 0,
    "type": {
      "_id": "5a16d5717a629e52b55b053f",
      "name": "RUOKA",
      "group": "5a16d5217a629e52b55b053a",
      "__v": 0
    },
    "name": "KIRSIKKATOMAATTIRASIA"
  }
]
