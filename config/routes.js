const express  = require("express");
const router   = express.Router();

const static = require('../controllers/static');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const stars = require('../controllers/stars');
const predictions = require('../controllers/predictions');

router.get('/', (req, res) => res.render('welcome/home'));

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/stars')
  .get(stars.new);

router.route('/predictions')
  .get(predictions.new);

router.route('/logout')
  .get(sessions.delete);

  module.exports = router;
