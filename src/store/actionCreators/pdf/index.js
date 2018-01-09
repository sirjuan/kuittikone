import { clearNewReceipt } from 'store/actions';
import { handleReceiptInit } from 'store/actionCreators';
import processPage from 'utils/pdfParser/processPage';
import PDFJS from 'pdfjs-dist';
import { post } from 'utils/server'

const uploadToCloudinary = (typedArray, fileName) => {

  // Prepare PDF for Cloudinary upload
  const blob = new Blob([typedArray], {type: "application/pdf", path: fileName});
  const formData = new FormData();
  formData.append('pdf', blob, fileName);

  // Upload PDF to Cloudinary and get Id fron return
  return post({ endpoint: '/upload', values: formData })
    .then(response => response.json())
    .then(pdf => pdf.public_id)
    .catch(error => console.log(error));
}

export const loadPdf = (typedArray, fileName) => async(dispatch) => {
  dispatch(clearNewReceipt());

  const [pdf, pdfId] = await Promise.all([
    PDFJS.getDocument(typedArray),
    uploadToCloudinary(typedArray, fileName)
  ])

  dispatch(handleReceiptInit(await processPage(pdf), pdfId));
}
