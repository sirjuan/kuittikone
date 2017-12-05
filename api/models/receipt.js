'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receipt = new Schema({
  shop: {type: Schema.Types.ObjectId, ref: 'Shop'},
  pdfId: String,
  total: Number,
  bonus: Number,
  date: Date,
});

module.exports = mongoose.model('Receipt', receipt);
