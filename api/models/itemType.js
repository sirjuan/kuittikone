const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemType = new Schema({
  name: {
    type: String,
    uppercase: true,
    text: true
  },
  group: {type: Schema.Types.ObjectId, ref: 'ItemGroup'}
});

module.exports = mongoose.model('ItemType', itemType);
