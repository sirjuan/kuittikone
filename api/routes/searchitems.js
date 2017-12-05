const model = require('../models/item');
const path = '/items/search';
modelName = 'Search items';

const router = require('express').Router();

router.route(path)
.get(async(req, res) => {
  console.log(req.query.items)
  const items = await model.find({"name" : { "$in" : req.query.items.split(';')}}).populate('type')
  res.json(items);
})

module.exports = { router, model, path, modelName };
