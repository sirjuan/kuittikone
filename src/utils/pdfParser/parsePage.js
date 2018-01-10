// @flow

import { SPACES } from './constants';
import evaluateConditions from './evaluateConditions';
import { Item, ReceiptAccumulator } from './types';
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

/***************** This functions parses pdf into receipt *******************/
const parsePage = (lines: { items: Item[] }) => {

  // Init
  let itemList: boolean = false;
  let campaingItems: boolean = false;
  let receiptType: string = 'shop';
  const init: ReceiptAccumulator = { items: {}, itemNames: [] };

  return lines.items.reduce((acc, item: Item, index: number) => {

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
    } = evaluateConditions(conditionParams);

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

  }, init)
};

export default parsePage;
