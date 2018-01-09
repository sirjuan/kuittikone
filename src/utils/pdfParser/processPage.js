import { handleError } from 'utils'
import parsePage from './parsePage'

const processPage = async(page) => {
  const pdfPage = await page.getPage(1).catch(handleError);
  const lines = await pdfPage.getTextContent().catch(handleError);
  const { items, itemNames, ...parsed} = parsePage(lines);
  return {...parsed, items: Object.values(items)};
}

export default processPage;
