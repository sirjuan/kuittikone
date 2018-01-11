import { ADD_TOP10_ITEMS } from 'store/constants'
import { addTop10Items } from 'store/actions';

const top10Items = [
  {
    "_id": "5a4c6b264be96f63c18cbc68",
    "number": 245.88,
    "item": {
      "_id": "5a4c6b264be96f63c18cbc68",
      "__v": 0,
      "type": "5a4c6b234be96f63c18cbc67",
      "name": "2 BE 95 E10"
    }
  },
  {
    "_id": "5a1ced34cd7eaa175bc6ba32",
    "number": 39.9,
    "item": {
      "_id": "5a1ced34cd7eaa175bc6ba32",
      "__v": 0,
      "type": "5a1ced31cd7eaa175bc6ba31",
      "name": "FP SS RECORD PLAYER"
    }
  },
  {
    "_id": "5a16d62e7a629e52b55b054d",
    "number": 37.5,
    "item": {
      "_id": "5a16d62e7a629e52b55b054d",
      "__v": 0,
      "type": "5a16d5dc7a629e52b55b0546",
      "name": "NAN PRO 1 6-PACK"
    }
  },
  {
    "_id": "5a16d6457a629e52b55b0555",
    "number": 35.849999999999994,
    "item": {
      "_id": "5a16d6457a629e52b55b0555",
      "__v": 0,
      "type": "5a16d5b77a629e52b55b0543",
      "name": "HIUSVÄRI 4 KESKIRUSKEA"
    }
  },
  {
    "_id": "5a1d50f4c3ceb803dc3542b0",
    "number": 35.5,
    "item": {
      "_id": "5a1d50f4c3ceb803dc3542b0",
      "__v": 0,
      "type": "5a16d5cf7a629e52b55b0545",
      "name": "MARLBORO WHITE GREEN"
    }
  },
  {
    "_id": "5a1d5251c9757f03eb89a889",
    "number": 30.78,
    "item": {
      "_id": "5a1d5251c9757f03eb89a889",
      "__v": 0,
      "type": "5a16d5ec7a629e52b55b0547",
      "name": "AAMUVELLI 6KK"
    }
  },
  {
    "_id": "5a1d5255c9757f03eb89a88a",
    "number": 30.78,
    "item": {
      "_id": "5a1d5255c9757f03eb89a88a",
      "__v": 0,
      "type": "5a16d5dc7a629e52b55b0546",
      "name": "ILTAVELLI RIISI 6KK"
    }
  },
  {
    "_id": "5a1d556e5764f50409103650",
    "number": 26.28,
    "item": {
      "_id": "5a1d556e5764f50409103650",
      "__v": 0,
      "type": "5a16d5dc7a629e52b55b0546",
      "name": "NAN PRO 2"
    }
  },
  {
    "_id": "5a1d4fd4c3ceb803dc3542a1",
    "number": 16.56,
    "item": {
      "_id": "5a1d4fd4c3ceb803dc3542a1",
      "__v": 0,
      "type": "5a16dc4e4fd336532d8100f2",
      "name": "KARJALA 24X0,33L TLK"
    }
  },
  {
    "_id": "5a1ced1acd7eaa175bc6ba30",
    "number": 14.95,
    "item": {
      "_id": "5a1ced1acd7eaa175bc6ba30",
      "__v": 0,
      "type": "5a16dc094fd336532d8100f1",
      "name": "HIPSTER PITSI 3-P"
    }
  }
]

describe('actions', () => {
  it('should create an action to add Top10 items', () => {
    const expectedAction = {
      type: ADD_TOP10_ITEMS,
      top10Items
    }
    expect(addTop10Items(top10Items)).toEqual(expectedAction)
  })
})
