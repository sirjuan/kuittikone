import * as moment from 'moment';
import 'moment/locale/fi';

export const jsonify = item => item.json();
export const log = item => {
  console.log(item);
  return item;
}

const parsePage = lines => {
  let itemsDone = false;
  let itemsStarted = false;
  return lines.items.reduce((acc, item, index) => {

    if (item.width === 0) return acc

    const dashes = /-{3,}/g;
    const spaces = / {2,}/g;
    const dateCheck = /\d{1,}:\d{2} {2,}\d{1,}-\d{2}-\d{4}/g;

    const line = item.str;
    const lineArray = line.split(spaces);

    if (index === 0) {
      const shop = item.str.split(spaces).join('');
      return {...acc, shop: { name: shop} }
    }

    const dateLine = line.match(dateCheck)

    if (dateLine) {
     const dateString = dateLine[0].split(spaces).join(' ');
     const date = moment(dateString, "H:mm DD-MM-YYYY").toDate();
     itemsStarted = true;
     return {...acc, date }
    }

    if (line.match(dashes)) itemsDone = true;

    if (lineArray.length === 2 && lineArray[0] === 'YHTEENSÄ') {
     return {...acc, total: Number(lineArray[1])}
    }

    if (lineArray[0] === 'Bonukseen kirjattu') {
     return {...acc, bonus: Number(lineArray[2])}
    }

    const price = Number(lineArray[1])
    if (!itemsDone && item.width >= 192 && !isNaN(price)) {
      const name = lineArray[0];
      if (acc.items[name]) {
        const old = {...acc.items[name]};
        const newPrice = Number(price) + Number(old.price)
        const parsedPrice = newPrice % 1 === 0 ? newPrice : newPrice.toFixed(2);
        acc.items[name] = { ...old, qty: Number(old.qty) + 1, price: parsedPrice }

      } else {
        acc.items[name] = { name: lineArray[0], qty: 1, unit: 'KPL', price, unitPrice: price }
      }
      acc.itemNames.push(name)
    }

    if (itemsStarted && !itemsDone && item.width < 192) {
     const name = acc.itemNames[acc.itemNames.length - 1];
     const [qty, unit] = lineArray[1].split(' ');
     const unitPrice = Number(lineArray[2].split(' ')[0])
     const old = {...acc.items[name]}
     const newQty = Number(qty) + Number(old.qty) - 1;
     const parsedQty = newQty % 1 === 0 ? newQty : newQty.toFixed(2);
     console.log(old.qty, qty, newQty, parsedQty)
     acc.items[name] = {...old, qty: parsedQty, unit, unitPrice };
    }

    return acc;
  }, { items: {}, itemNames: [] })
};

export const handleError = e => console.error(e);

export const handleFetchError = (response) => {
    if (!response.ok) {
        throw Error(`${response.status}:${response.statusText}`);
    }
    return response;
}

export const processPage = async(page) => {
  const pdfPage = await page.getPage(1).catch(handleError);
  const lines = await pdfPage.getTextContent().catch(handleError);
  const parsed = parsePage(lines);
  return {...parsed, items: Object.values(parsed.items)};
}
