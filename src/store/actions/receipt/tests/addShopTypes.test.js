import { ADD_SHOPTYPES } from 'store/constants'
import { addShopTypes } from 'store/actions';

describe('actions/addShopTypes', () => {
  it('should create an action to add shop types', () => {
    const expectedAction = {
      type: ADD_SHOPTYPES,
      shopTypes
    }
    expect(addShopTypes(shopTypes)).toEqual(expectedAction)
  })
});

const shopTypes = [
  {
    "_id": "5a0eb3085b07ae06c93ac475",
    "name": "SALE",
    "shops": [],
    "__v": 0
  },
  {
    "_id": "5a0ebaff4dfcaa08145af7d9",
    "name": "JOOPAJOO",
    "shops": [],
    "__v": 0
  },
  {
    "_id": "5a0ebb9bba5bb00845ff1e3a",
    "name": "JUUJUU",
    "shops": [],
    "__v": 0
  },
  {
    "_id": "5a17be81e65c8103e452e424",
    "name": "HOMO",
    "__v": 0
  },
  {
    "_id": "5a1beabdc731e008938346e5",
    "name": "RAVINTOLA",
    "__v": 0
  },
  {
    "_id": "5a1beb0fb8009c08b3cf6869",
    "name": "TESTING",
    "__v": 0
  },
  {
    "_id": "5a1beb82ff173708d543e084",
    "name": "DGSDFGDSFGSDFG",
    "__v": 0
  },
  {
    "_id": "5a1bec4f7eedee08f384fdf3",
    "name": "FDHDFHDFGHF",
    "__v": 0
  },
  {
    "_id": "5a1bec879fab69091121c85b",
    "name": "FDHDFHDFGHDFHG",
    "__v": 0
  },
  {
    "_id": "5a1bed3188393709476e4490",
    "name": "JOO",
    "__v": 0
  },
  {
    "_id": "5a4c6f68cecadc6487ef11f5",
    "name": "ABC",
    "__v": 0
  },
  {
    "_id": "5a0eb2fa5b07ae06c93ac473",
    "name": "PRISMA",
    "shops": [],
    "primaryColor": "#00a651",
    "secondaryColor": "#ffffff",
    "thirdColor": "#08924b",
    "__v": 0
  },
  {
    "_id": "5a4f5faf6a59866aa002a864",
    "name": "UUSIKAUPPATYYPPI",
    "__v": 0
  },
  {
    "_id": "5a4f6655b4d6ae6abc279511",
    "name": "UUSIOPTIO",
    "__v": 0
  },
  {
    "_id": "5a4f66afb330ec6acb6bf92b",
    "name": "VIELÄUUDEMPIOPTIO",
    "__v": 0
  },
  {
    "_id": "5a4f6b15f91f8a6ae9d80c1e",
    "name": "UUTTAON",
    "__v": 0
  },
  {
    "_id": "5a4f6b6fea177b6af8b8353e",
    "name": "VIELÄLISÄÄ",
    "__v": 0
  },
  {
    "_id": "5a4f6d3baa5ffc6b0720f384",
    "name": "JOOP",
    "__v": 0
  },
  {
    "_id": "5a0eb3015b07ae06c93ac474",
    "name": "S-MARKET",
    "shops": [],
    "primaryColor": "#fce400",
    "secondaryColor": "#fce400",
    "thirdColor": "#002d58",
    "__v": 0
  }
]
