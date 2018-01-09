import { getLastElement, getValueByKey, formatNumber } from 'utils/common'

const handleDiscount = ({acc, splitLine}) => {
  const itemName = getLastElement(acc.itemNames);
  const currentItem = getValueByKey(acc.items, itemName);
  const discount = Number(splitLine[2].replace('-','')); //remove dash from end before parsing number
  const price = formatNumber(currentItem.price - discount);
  acc.items[itemName] = { ...currentItem, price, unitPrice: currentItem.qty === 1 ? price : price / currentItem.qty };
  return acc;
}

export default handleDiscount;
