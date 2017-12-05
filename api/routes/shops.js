const model = require('../models/shop');
const path = '/shops';
const modelName = 'Shop';

const router = require('express').Router();

// Uses default get and post methods. Use
// router.route(route).get((req,res) => {})
// to override

module.exports = { router, model, path, modelName };
