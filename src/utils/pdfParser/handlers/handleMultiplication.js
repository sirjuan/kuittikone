import { getLastElement, getValueByKey, formatNumber } from 'utils/common'

const handleMultiplication = ({acc, splitLine}) => {
  const itemName = getLastElement(acc.itemNames);
  const currentItem = getValueByKey(acc.items, itemName);
  const [newQty, unit] = splitLine[1].split(' ');
  const unitPrice = Number(splitLine[2].split(' ')[0])
  const qty = formatNumber(Number(newQty) + Number(currentItem.qty) - 1);
  acc.items[itemName] = {...currentItem, qty, unit, unitPrice };
  return acc;
}

export default handleMultiplication;
