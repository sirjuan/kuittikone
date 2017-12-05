const model = require('../models/itemGroup');
const path = '/itemgroups';
const modelName = 'Item group'

const router = require('express').Router();

// Uses default get and post methods. Use
// router.route(route).get((req,res) => {})
// to override

module.exports = { router, model, path, modelName };
