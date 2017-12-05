import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { Field, reduxForm, submit, destroy } from 'redux-form'
import { addItemGroup, clearNewReceipt } from '../../Receipt/actions';
import { processPage } from '../../utils';
import AddReceiptForm from './AddReceiptForm';
import PDFJS from 'pdfjs-dist';
import { addInitialReceipt, findShopDetails, findItemDetails } from '../../Receipt/actions';
import { dispatch } from '../../store';



class AddReceipt extends React.Component {

  onFileChange = (e) => {

    const path = e.target.value;
    const split = path.split('\\')
    const filename = split[split.length-1]

    const fileReader = new FileReader();

    fileReader.onload = (async(event) => {
      await dispatch(clearNewReceipt());
      const formData = new FormData();
      const api_url = 'http://localhost:3001/api';

      const typedarray = new Uint8Array(event.target.result);
      const blob = new Blob([typedarray], {type: "application/pdf", path: filename});
      formData.append('pdf', blob, filename);

      const pdfId = await fetch(`${api_url}/upload`, { method: 'POST', body: formData })
        .then(response => response.json())
        .then(pdf => pdf.public_id)
        .catch(error => console.log(error));

      PDFJS.getDocument(typedarray)
        .then(pdf => processPage(pdf))
        .then(result => {
          const { items, ...receipt } = result
          dispatch(addInitialReceipt({...receipt, pdfId}))
          dispatch(findShopDetails(receipt.shop))
          dispatch(findItemDetails(items))
        });
    });
    fileReader.readAsArrayBuffer(e.target.files[0]);
  }

  handleSubmit = () => dispatch(submit('newReceipt'))

  toggle = () => this.props.toggle(this.props.modal);

  render() {
    const { invalid, handleSubmit, className, isOpen } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={this.toggle} className={className} size={this.props.size}>
        <ModalHeader toggle={this.toggle}>Lisää kuitti<Input id='file-input' className='center-block' type="file" onChange={this.onFileChange} /></ModalHeader>
        {this.props.formLoaded &&
          <ModalBody>
            <AddReceiptForm />
          </ModalBody>
        }
        <ModalFooter>
          {this.props.formLoaded && <Button disabled={invalid} color="primary" onClick={this.handleSubmit}>Save</Button> }
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default AddReceipt;
