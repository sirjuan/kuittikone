const defaultCallback = (err, result) => err ? res.send(err) : res.json(result)

module.exports = {
  searchByName: require('./searchByName'),
  save: require('./save'),
  createModelAndSave: require('./createModelAndSave'),
  alreadyExists: require('./alreadyExists')
}
