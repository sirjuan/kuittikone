import { dispatch } from 'store';
import { loadPdf } from 'store/actionCreators';

const getFileName = path => {
  const split = path.split('\\')
  return split[split.length-1]
}

const handleFileChange = (e) => {
  if (e.target && e.target.files[0] !== undefined) {
    const fileReader = new FileReader();
    const fileName = getFileName(e.target.value)
    fileReader.onload = (async(event) => dispatch(loadPdf(new Uint8Array(event.target.result), fileName)))
    fileReader.readAsArrayBuffer(e.target.files[0]);
  }
}

export default handleFileChange;
