import { ADD_INITIAL_ITEMS } from 'store/constants'
import { addInitialItems } from 'store/actions';

describe('actions/addInitialItems', () => {
  it('should create an action to add initial items to new receipt', () => {
    const expectedAction = {
      type: ADD_INITIAL_ITEMS,
      items
    }
    expect(addInitialItems(items)).toEqual(expectedAction)
  })
});

const items = [
  {
    "name": "MUOVIKASSI 40L HARMAA",
    "qty": 1,
    "unit": "KPL",
    "price": 0.2,
    "unitPrice": 0.2
  },
  {
    "name": "JÄÄSALAATTI PAK",
    "qty": 1,
    "unit": "KPL",
    "price": 1.25,
    "unitPrice": 1.25
  },
  {
    "name": "BANAANI CHIQUITA",
    "qty": "0.46",
    "unit": "KG",
    "price": 0.64,
    "unitPrice": 1.39
  },
  {
    "name": "SNACK AUR.KUIV.TOMAATTI",
    "qty": 1,
    "unit": "KPL",
    "price": 1.79,
    "unitPrice": 1.79
  },
  {
    "name": "SISU HORNA",
    "qty": 2,
    "unit": "KPL",
    "price": 1.88,
    "unitPrice": 0.94
  },
  {
    "name": "RAHKAVAAHTO HEDELMÄ",
    "qty": 1,
    "unit": "KPL",
    "price": 1.05,
    "unitPrice": 1.05
  },
  {
    "name": "MANSIKKARAHKA",
    "qty": 1,
    "unit": "KPL",
    "price": 0.65,
    "unitPrice": 0.65
  },
  {
    "name": "RIISIVÄLIPALA TROOP HED",
    "qty": 3,
    "unit": "KPL",
    "price": 1.77,
    "unitPrice": 0.59
  },
  {
    "name": "KIRSIKKATOMAATTIRASIA",
    "qty": 1,
    "unit": "KPL",
    "price": 2.29,
    "unitPrice": 2.29
  }
]
