import React from 'react';
import { Modal} from 'reactstrap';
import Form from './Form'
import FileChooser from './FileChooser'

class AddReceipt extends React.Component {

  toggle = () => this.props.toggle(this.props.modal);

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.toggle} size={this.props.size}>
        {this.props.formLoaded
          ? <Form toggleAdd={this.toggle} />
          : <FileChooser toggle={this.toggle} />
        }
      </Modal>
    );
  }
}

export default AddReceipt;
