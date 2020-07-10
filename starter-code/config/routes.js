const express = require('express');
const router  = express.Router();
const celebritiesController = require('../controllers/celebrities.controller');

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

module.exports = router;