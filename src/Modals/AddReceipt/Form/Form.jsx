import React from 'react'
import { Field, FieldArray } from 'redux-form'
import { Button, Container, Col, Row, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import { renderSelectItem } from 'utils/form'
import { clearOnSuccess } from './utils'
import ItemTable from './ItemTable';
import SubmitFail from './SubmitFail'
import SubmitSuccess from './SubmitSuccess';
import moment from 'moment'
import 'moment/locale/fi';
import './styles.css'
moment.locale('fi')

class AddReceiptForm extends React.Component  {

  clear = () => clearOnSuccess(this.props.dispatch, this.props.destroy)

  render = () => {
    const { error, submitFailed, invalid, handleSubmit, submitSucceeded, submitting, ...rest } = this.props;
    const { formValues = {}, itemTypes, shopTypes, toggleShop, toggleAdd, toggleForm, classes, handleNewOption } = rest;
    const { items = [], shop = {}, total, bonus, date } = formValues;
    return (
      <form>
        <ModalHeader toggle={toggleAdd} className={classes.header}>
          {shop.name} <span>{moment(date).format('LLLL')}</span>
          <Button outline
            onClick={toggleForm}
            color='primary'
            size='sm'
            className={classes.headerButton}>
            Vaihda kuitti
          </Button>
        </ModalHeader>
        <ModalBody>
          <SubmitFail show={error && submitFailed} error={error} clear={this.props.clearSubmitErrors} />
          <SubmitSuccess show={submitSucceeded && !submitting} clear={this.clear} />
          <Container>
            <Row>
              <Col>
                <p>Yhteissumma: {total}€, Bonukseen: {bonus}€ </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Field
                  name='shop.type'
                  type="text"
                  component={renderSelectItem}
                  handleNewOption={handleNewOption}
                  modal='addShopType'
                  items={shopTypes}
                  label="Valitse kauppatyyppi..."
                />
              </Col>
              <Col>
                <Button
                  color='link'
                  onClick={toggleShop}
                  className={classes.addButton}>
                  Lisää
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <FieldArray
                  name="items"
                  component={ItemTable}
                  itemTypes={itemTypes}
                  props={{items, total, classes, modal:'addItemType'}}
                />
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button
            disabled={invalid}
            className={classes.saveButton}
            color="primary"
            onClick={handleSubmit}>
            Save
          </Button>
          <Button
            color="secondary"
            onClick={toggleAdd}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    )
  }
}

export default AddReceiptForm;
