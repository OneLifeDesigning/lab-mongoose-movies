const express = require('express');
const router  = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');
const moviesController = require('../controllers/movies.controller');

/* GET home page */
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/celebrities', celebritiesController.all);
router.get('/celebrity/:id', celebritiesController.show);
router.get('/celebrities/create', celebritiesController.create);

router.get('/celebrity/:id/edit', celebritiesController.edit);
router.post('/celebrity/:id/delete', celebritiesController.delete);

router.post('/celebrity/save', celebritiesController.save);
router.post('/celebrity/:id/save', celebritiesController.update);

router.get('/movies', moviesController.all);
router.get('/movie/:id', moviesController.show);
router.get('/movies/create', moviesController.create);

router.get('/movie/:id', moviesController.show);
router.get('/movies/create', moviesController.create);

router.get('/movie/:id/edit', moviesController.edit);
router.post('/movie/:id/delete', moviesController.delete);

router.post('/movie/save', moviesController.save);
router.post('/movie/:id/save', moviesController.update);

module.exports = router;