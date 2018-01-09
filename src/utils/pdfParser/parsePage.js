import { DATE_CHECK, DASHES, SPACES } from './constants';
import {
  handleBonus,
  handleCampaignItems,
  handleDate,
  handleDiscount,
  handleItemLine,
  handleMultiplication,
  handleShopName,
  handleTotal
} from './handlers'

const getConditions = ({ date, bonus, line, splitLine, index, itemList, item, receiptType }) => ({
   isItemListEnd: line.match(DASHES),
   isDateLine: !date && line.match(DATE_CHECK[receiptType]) !== null,
   isCampaignStartLine: line.startsWith('S-Etu kampanja'),
   isShopNameLine: index === 0, // first line should be shop name
   isTotalLine: splitLine.length === 2 && splitLine[0].toUpperCase() === 'YHTEENSÄ',
   isBonusLine: !bonus && (line.includes('Bonukseen kirjattu') || line.includes('Bonusostoihin kirjattu')),
   isItemLine: itemList && item.width >= 192,
   isMultiplicationLine: itemList && item.width < 192,
   isDiscountLine: itemList && line.startsWith('%') && line.endsWith('-'),
})

const parsePage = lines => {
  let itemList = false;
  let campaingItems = false;
  let receiptType = 'shop';
  return lines.items.reduce((acc, item, index) => {

    if (item.width === 0) return acc; // Ignore empty lines

    const line = item.str.trim(); // remove whitespace from both ends;
    const splitLine = item.str.split(SPACES); // split line by multiple SPACES

    if (index === 0 && line.includes('ABC')) receiptType = 'abc';

    /**************************************** CONDITIONS **********************************************/

    const conditionParams = {
      date: acc.date,
      bonus: acc.bonus,
      line,
      splitLine,
      index,
      itemList,
      item,
      receiptType
    }

    const {
      isItemListEnd,
      isDateLine,
      isCampaignStartLine,
      isTotalLine,
      isBonusLine,
      isShopNameLine,
      isMultiplicationLine,
      isItemLine,
      isDiscountLine
    } = getConditions(conditionParams);

    /**************************************** CONDITION HANDLERS **********************************************/

    if (isItemListEnd) { // Either after itemlist or campaign list. Doesn't matter, set both false.
      itemList = false;
      campaingItems = false;
      return acc;
    }
    if (isDateLine) {
     itemList = true; // next up: list of items
     return handleDate({acc, line, receiptType})
    }
    if (isCampaignStartLine) {
      campaingItems = true;
      return acc;
    }
    if (isShopNameLine) return handleShopName({acc, line})
    if (isTotalLine) return handleTotal({acc, splitLine}); // May appear more than once. If so, we want the latter.
    if (isBonusLine) return handleBonus({acc, splitLine})
    if (isItemLine) {
      if (receiptType === 'abc') itemList = false;
      return handleItemLine({acc, splitLine, receiptType}); // 'VANILJARAHKA 3,5%      3.90'
    }
    if (isMultiplicationLine) return handleMultiplication({acc, splitLine}) // '2 KPL     1.95 EUR/KPL'
    if (isDiscountLine) return handleDiscount({acc, splitLine}) // '% ALENNUS     50%        7.48-'
    if (campaingItems) return handleCampaignItems({acc, splitLine}); // 'PARISTO ALKALI AAA     2.68'. Item name may be shorter than in normal list.

    return acc;

  }, { items: {}, itemNames: [] })
};

export default parsePage;
