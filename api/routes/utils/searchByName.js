const searchByName = (func, name) => func.findOne({$text: { $search: name}}).exec((e, r) => e ? console.log(e) : r)

module.exports = searchByName;
