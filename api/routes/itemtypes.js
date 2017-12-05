const model = require('../models/itemType');
const path = '/itemtypes';
const modelName = 'Item type'

const router = require('express').Router();

// Uses default get and post methods. Use
// router.route(path).get((req,res) => {})
// to override

module.exports = { router, model, path, modelName };
