const { createModelAndSave, alreadyExists } = require('./utils');
const ObjectId = require('mongoose').Types.ObjectId;
const cloudinary = require('cloudinary');
const Purchase = require('../models/purchase');
const fs = require('fs')
const formidable = require('express-formidable');

const model = require('../models/receipt');
const path = '/receipts'
const modelName = 'Receipt'

const router = require('express').Router();

const createPurchaseList = ({items = [], receipt, res}) => (
  items.forEach(item => {
    const newItem = new Purchase({ ...item, receipt })
    return newItem.save().catch(e => res.send(e))
  }
))

router.route(path)
.get((req, res) => model.find(req.query, (err, result) => err ? res.send(err) : res.json(result)))
.post(async(req, res) => {
  console.log(req.body.receipt)
  const itAlreadyExists = await model.find({ date: req.body.receipt.date })
    .then(doc => doc.length > 0)
    .catch(e => res.send(e));
  if(itAlreadyExists) return alreadyExists(res, 'Receipt')
  else {
    const receiptId = new ObjectId();
    await createPurchaseList({items: req.body.purchases, receiptId, res});
    createModelAndSave({model, body: { _id: receiptId, ...req.body.receipt}, res})
  }
});


router.route('/pdf')
.post((req, res) => {
  console.log('files',req.files)
  //console.log(req.fields.pdf)
  //cloudinary.uploader.upload(req.fields.pdf, function(result) { console.log(result) },{public_id: 'single_page_pdf'})
  let stream = cloudinary.uploader.upload_stream(function(result) {
  console.log(result);
  res.send('Done:<br/> <img src="' + result.url + '"/><br/>' +
           cloudinary.image(result.public_id, { format: "png", width: 100, height: 130, crop: "fill" }));
  }, { public_id: req.body.title } );

  fs.createReadStream(req.body.pdf.path, {encoding: 'binary'}).on('data', stream.write).on('end', stream.end);
})

module.exports = { router, model, path, modelName };
