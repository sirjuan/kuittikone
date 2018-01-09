import React from 'react';
import { Button, ModalHeader, ModalFooter, Input } from 'reactstrap';
import handleFileChange from 'utils/pdfParser/fileHandler';

const FileChooser = ({toggle}) => (
  <div>
    <ModalHeader toggle={toggle}>Lisää kuitti<Input id='file-input' className='center-block' type="file" onChange={handleFileChange} /></ModalHeader>
    <ModalFooter>
      <Button color="secondary" onClick={toggle}>Cancel</Button>
    </ModalFooter>
  </div>
)

export default FileChooser;
