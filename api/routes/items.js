const model = require('../models/item');
const path = '/items';
const modelName = 'Item';
const ObjectId = require('mongoose').Types.ObjectId;

const router = require('express').Router();

// Uses default get and post methods. Use
// router.route(path).get((req,res) => {})
// to override

router.route(path)
.get((req, res) => model.find(req.query, (err, result) => err ? res.send(err) : res.json(result)))
.put(async(req, res) => {
  const { body } = req;
  const { _id, ...updateObj } = body;
  const id = ObjectId.isValid(_id) ? _id : new ObjectId();

  model.findByIdAndUpdate( id, { $set: updateObj }, { upsert:true, new: true })
   .then(result => res.json(result))
   .catch(e => res.send(e));
})

module.exports = { router, model, path, modelName };
