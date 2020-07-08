const Celebrity = require('../models/celebrity.model');

exports.all = (req, res) => {
  Celebrity.find({})
  .then( celebrities => res.render('celebrity', {celebrities}))
  .catch((err) => console.log(err))
}