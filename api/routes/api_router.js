'use strict';
const routes = [
  require('./shops'),
  require('./receipts'),
  require('./itemtypes'),
  require('./itemgroups'),
  require('./shoptypes'),
  require('./items'),
  require('./purchases'),
  require('./searchitems')
]

const { createModelAndSave, alreadyExists } = require('./utils');

const checkDefinedMethods = routerStack => routerStack.reduce((acc, cur) => ({
  get: cur.route.methods.get ? acc.get : true,
  post: cur.route.methods.post ? acc.post : true
}), { get: false, post: false })

const routesWithDefaults = routes => routes.map( props => {
  const { router, path, model, modelName } = props;

  if ( !path || !model ) return router; //faulty or non-existent routing object

  const areMethodsDefined = checkDefinedMethods(router.stack);

  !areMethodsDefined.get &&
  router.route(path).get((req, res) => {
    model.find(req.query, (err, result) => err ? res.send(err) : res.json(result))})

  !areMethodsDefined.post &&
  router.route(path).post((req, res) => {
    console.log(req.body)
    model.find({ name: req.body.name.toUpperCase() })
      .then(doc => doc.length > 0 ? alreadyExists(res, modelName): createModelAndSave({model, body: req.body, res}))
      .catch(e => res.send(e));
  });

  return router;
})

module.exports = require('express').Router().use(routesWithDefaults(routes));
