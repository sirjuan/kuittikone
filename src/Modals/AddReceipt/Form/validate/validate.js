import moment from 'moment'


//const isRequired2 = (value, text = '') => ((!value || value.length === 0) && text) ? text : 'Field is isRequired! ';

const isRequired = (value) => (!value || value.length === 0) && 'Field is isRequired! ';
const isObjectId = value => {}//!mongoose.Types.ObjectId.isValid(value) && 'Not a valid ObjectId'
const isNumber = value => (!typeof value === 'number' || isNaN(value)) && 'Field needs number! '

const isValidDate = (value) => moment(value).isValid() ? undefined :  'Not a valid date! '

const validators = {
  isRequired: value => isRequired(value),
  isNumber: value => isNumber(value),
  isObjectId: value => isObjectId(value),
  isValidDate: value => isValidDate(value)
};

export const validateFlat = (values, validatorsForThisForm) => {
  if (Array.isArray(validatorsForThisForm)) {
    if (validatorsForThisForm[0] === 'array') {
      const validateValues = values || [];
      const errors = validateValues.reduce((acc, item, index) => {
        const error = validateFlat(item, validatorsForThisForm[1]);
        if (Object.keys(error).length) acc[index] = error;
        return acc;
      },[])
      return errors;
    }
    else return validateKey(values, validatorsForThisForm);
  }
  else {
    const errors =  Object.keys(validatorsForThisForm).reduce((errors, key) => {
      const errorsForThisKey = validateFlat(values ? values[key] : undefined, validatorsForThisForm[key] )
      return errorsForThisKey.length  ? {...errors, [key]: errorsForThisKey } : errors; // works with both array and string
    }, {})
    return errors
  }

};

// validates nested fields, in this case contactInfo { postal: {...}, contact: {...} }
// can be be used together with any flat fields validator
export const validateNested = (values, validateKeys) => (
  Object.keys(validateKey).reduce((acc, key) => {
    const errors = validateKeys[key](values[key]);
    return Object.keys(errors).length ? { ...acc, [key]: validateKeys[key](values[key]) } : acc;
  }, {})
);

const validateKey = (value, validatorjoo) => {
  return validatorjoo.reduce((errs, validator, index) => {

    const validationResult = typeof(validator) === 'function'
      ? validator(value) // use function if you want to feed more parameters than value
      : validators[validator](value); // use string to find validator from object

    return validationResult ? `${errs}${validationResult}` : errs;
  },'')
}

const items = {
  price: [isRequired, isNumber],
  qty: [isRequired, isNumber],
  unit: [isRequired],
  unitPrice: [isRequired, isNumber],
  type: [isRequired],
  _id: [isRequired],
}

const validateReceipt = {
  total: [isRequired, isNumber],
  bonus: [isRequired, isNumber],
  date: [isRequired, isValidDate],
  shop: {
    _id: [isRequired],
    type: {
      _id: [isRequired]
    },
  },
  items: ['array', items],
};

export const validate = values => validateFlat(values, validateReceipt);

export default validate;
