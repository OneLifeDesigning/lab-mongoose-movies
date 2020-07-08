const Celebrity = require('../models/celebrity.model');

exports.index = (req, res) => {
  Celebrity.find({})
  .then( celebrities => res.render('celebrities/index', {celebrities}))
  .catch(err => next(err))
}
exports.show = (req, res) => {
  Celebrity.findOne({id: req.param.id})
  .then(celebrity => res.render('celebrities/show', {celebrity}))
  .catch(err => next(err))
}