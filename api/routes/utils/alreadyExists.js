module.exports = (res, modelName) => {
  const code = 409;
  const message = `${modelName} already exists`;
  res.writeHead(code, message, {'content-type' : 'text/plain'});
  res.end(message);
}
