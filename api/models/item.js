const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const item = new Schema({
  name: {
    type: String,
    uppercase: true,
    text: true
  },
  type: {type: Schema.Types.ObjectId, ref: 'ItemType'},
  group: {type: Schema.Types.ObjectId, ref: 'ItemGroup'}
});

module.exports = mongoose.model('Item', item);
