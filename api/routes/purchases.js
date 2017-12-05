const model = require('../models/purchase');
const path = '/purchases';
const modelName = 'Purchase';

const router = require('express').Router();

// Uses default get and post methods. Use
// router.route(path).get((req,res) => {})
// to override

router.route(`${path}/top10`)
.get((req, res) => {
  const field = req.query.by ? req.query.by : 'price';
  model.aggregate([{
    $group: {
    _id: '$item', // grouping key - group by field district
    number: { $sum: `$${field}`}
}},
{
  $lookup:
    {
      from: "items",
      localField: "_id",
      foreignField: "_id",
      as: "item"
    }
},
{ $sort : { number : -1 } },
{ $limit : 10 },
{ "$unwind": { "path" : "$item" } },
],function(err,results) {
    if (err) throw err;
    res.send(results)
  })
})

router.route(`/joo/top10`)
.get((req, res) => {
  const field = req.query.by ? req.query.by : 'price';
  model.aggregate([{
    $group: {
    _id: '$item', // grouping key - group by field district
    number: { $sum: `$${field}`}
}},
{
  $lookup:
    {
      from: "items",
      localField: "_id",
      foreignField: "_id",
      as: "item"
    }
},

{ "$unwind": { "path" : "$item" } },
{
  $lookup:
    {
      from: "itemtypes",
      localField: "item.type",
      foreignField: "_id",
      as: "type"
    }
},
{ "$unwind": { "path" : "$type" } },
{
  $group: {
  _id: '$type._id', // grouping key - group by field district
  number: { $sum: `$number`},
  name: { $first: '$type.name'}
}
},
{ $sort : { number : -1 } }



],function(err,results) {
    if (err) throw err;
    res.send(results)
  })
})

module.exports = { router, model, path, modelName };
