const Movie = require('../models/movie.model');

exports.all = (req, res) => {
  Movie.find({})
    .then( movies => res.render('movies/all', {movies, title: 'All movies at the moment'}))
    .catch(err => next(err))
}
exports.show = (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => res.render('movies/show', {movie, title: 'This a faboulose movie'}))
    .catch(err => next(err))
}

exports.edit = (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => res.render('movies/create', {movie, title: 'New movie created'}))
    .catch(err => next(err))
}

exports.create = (req, res) => res.render('movies/create', {title: 'Create a new movie'})

exports.save = (req, res) => {
  Movie.create(req.body)
    .then(() => res.redirect('/movies'))
    .catch(err => next(err))
}

exports.update = (req, res) => {
  Movie.findByIdAndUpdate({_id: req.params.id},req.body,{new: true})
    .then(movie => res.redirect(`/movie/${movie.id}`))
    .catch(err => {
      res.render('movies/create', {movie: req.body, err, title: 'Create a new movie'})
    })
}

exports.delete = (req, res) => {
  Movie.findByIdAndRemove({_id: req.params.id})
  .then(() => res.redirect('/movies'))
  .catch(err => next(err))
}