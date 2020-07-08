const Celebrity = require('../models/celebrity.model');

exports.all = (req, res) => {
  Celebrity.find({})
  .then( celebrities => res.render('celebrities/index', {celebrities}))
  .catch(err => next(err))
}