import { DASHES, DATE_CHECK } from './constants';

const evaluateConditions = ({ date, bonus, line, splitLine, index, itemList, item, receiptType }) => ({
   isItemListEnd: line.match(DASHES),
   isDateLine: !date && line.match(DATE_CHECK[receiptType]) !== null,
   isCampaignStartLine: line.startsWith('S-Etu kampanja'),
   isShopNameLine: index === 0, // first line should be shop name
   isTotalLine: splitLine.length === 2 && splitLine[0].toUpperCase() === 'YHTEENSÄ',
   isBonusLine: !bonus && (line.includes('Bonukseen kirjattu') || line.includes('Bonusostoihin kirjattu')),
   isItemLine: itemList && item.width >= 192,
   isMultiplicationLine: itemList && item.width < 192,
   isDiscountLine: itemList && line.startsWith('%') && line.endsWith('-'),
});

export default evaluateConditions;
