const save = ({item, res}) => item.save((err, result) => {
  err ? res.send(err) : res.json(result)
});

module.exports = save;
