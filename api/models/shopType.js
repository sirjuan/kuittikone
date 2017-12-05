const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopType = new Schema({
  name: {
    type: String,
    uppercase: true,
    text: true
  },
});

/* shopType.post('findOne', function(error, doc, next) {
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    next(new Error('Given value is not valid ObjectId'));
  } else {
    next(error);
  }
}); */

module.exports = mongoose.model('ShopType', shopType);
