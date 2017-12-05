const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemGroup = new Schema({
  name: {
    type: String,
    uppercase: true,
    text: true
  }
})

module.exports = mongoose.model('ItemGroup', itemGroup);
