module.exports = ({model, body, res}) => {
  const item = new model(body)
  require('./save')({item, res});
}
