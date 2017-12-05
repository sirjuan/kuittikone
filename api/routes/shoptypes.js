const model = require('../models/shopType');
const path = '/shoptypes';
const modelName = 'Shop type';

const router = require('express').Router();

// Uses default get and post methods. Use
// router.route(route).get((req,res) => {})
// to override

router.route('/shoptypes/search')
.get(async(req, res) => {
  const result = await model.find({ $text: { $search: req.query.name, $caseSensitive: false, } });
  res.send(result);
})
.post((req, res) => {
  console.log(req.body)
  model.find({ name: req.body.name.toUpperCase() })
    .then(doc => doc.length > 0 ? alreadyExists(res, modelName): createModelAndSave({model, body: req.body, res}))
    .catch(e => res.send(e));
});

module.exports = { router, model, path, modelName };
