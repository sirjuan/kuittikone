import { getValueByKey, formatNumber } from 'utils/common'

const createItem = ({itemName = '', price = 0, qty = 1, unit = 'KPL', unitPrice = price}) => ({
  name: itemName,
  qty,
  unit,
  price,
  unitPrice
})

const updateItem = ({acc, itemName, price: newPrice}) => {
  const currentItem = getValueByKey(acc.items, itemName);
  return {
    ...currentItem,
    qty: formatNumber(Number(currentItem.qty) + 1),
    price: formatNumber(Number(newPrice) + Number(currentItem.price))
  }
}

const getItem = (itemName = '', splitLine = [], receiptType = '') => receiptType === 'abc' ? {
  itemName,
  price: Number(splitLine[3].split(' ')[0].replace(',','.')),
  unit: 'L',
  unitPrice: Number(splitLine[2].replace(',','.')),
  qty: Number(splitLine[1].replace(',','.'))
} : {
  itemName,
  price: Number(splitLine[1])
}

const handleItemLine = ({acc, splitLine, receiptType}) => {
  const itemName = splitLine[0];
  const item = getItem(itemName, splitLine, receiptType);
  acc.items[itemName] = acc.items[itemName]
    ? updateItem({acc, ...item})
    : createItem({...item})
  acc.itemNames.push(itemName)
  return acc;
}

export default handleItemLine;
