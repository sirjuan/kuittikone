import { getValueByKey} from 'utils/common'

const updateItem = (item, price) => ({
  item,
  price,
  unitPrice: item.qty === 1 ? price : price / item.qty
})

const handleCampaignItems = ({acc, splitLine}) => {
  const itemName = acc.itemNames.find(itemName => itemName.startsWith(splitLine[1]));
  const currentItem = getValueByKey(acc.items, itemName);
  const price = Number(splitLine[2]);
  acc.items[itemName] = updateItem(currentItem, price);
  return acc;
}

export default handleCampaignItems;
