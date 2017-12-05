const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shop = new Schema({
  name: {
    type: String,
    uppercase: true,
    text: true
  },
  type: {type: Schema.Types.ObjectId, ref: 'ShopType'}
});

module.exports = mongoose.model('Shop', shop);
