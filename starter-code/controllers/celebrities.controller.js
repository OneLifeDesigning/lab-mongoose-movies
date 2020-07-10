const Celebrity = require('../models/celebrity.model');

exports.all = (req, res) => {
  Celebrity.find({})
    .then( celebrities => res.render('celebrities/all', {celebrities, title: 'All Celebrities at the moment'}))
    .catch(err => next(err))
}
exports.show = (req, res) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render('celebrities/show', {celebrity, title: 'This a faboulose celebrity'}))
    .catch(err => next(err))
}

exports.edit = (req, res) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render('celebrities/create', {celebrity, title: 'New celebrity created'}))
    .catch(err => next(err))
}

exports.create = (req, res) => res.render('celebrities/create', {title: 'Create a new celebrity'})

exports.save = (req, res) => {
  Celebrity.create(req.body)
    .then(() => res.redirect('/celebrities'))
    .catch(err => next(err))
}

exports.update = (req, res) => {
  Celebrity.findByIdAndUpdate({_id: req.params.id},req.body,{new: true})
    .then(celebrity => res.redirect(`/celebrity/${celebrity.id}`))
    .catch(err => {
      res.render('celebrities/create', {celebrity: req.body, err, title: 'Create a new celebrity'})
    })
}

exports.delete = (req, res) => {
  Celebrity.findByIdAndRemove({_id: req.params.id})
  .then(() => res.redirect('/celebrities'))
  .catch(err => next(err))
}