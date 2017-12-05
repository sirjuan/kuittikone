const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchase = new Schema({
  date: Date,
  qty: Number,
  unit: String,
  unitPrice: Number,
  price: Number,
  receipt: {type: Schema.Types.ObjectId, ref: 'Receipt'},
  item: {type: Schema.Types.ObjectId, ref: 'Item'}
})

module.exports = mongoose.model('Purchase', purchase);
