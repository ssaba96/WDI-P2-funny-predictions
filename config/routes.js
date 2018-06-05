const express  = require("express");
const router   = express.Router();

const static = require('../controllers/static');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

  // router.route('/pictures')
  //   .get(pictures.index)
  //   .post(pictures.create);
  // router.route('/pictures/new')
  //   .get(pictures.new);
  // router.route('/pictures/:id')
  //   .get(pictures.show)
  //   .put(pictures.update)
  //   .delete(pictures.delete);
  // router.route('/pictures/:id/edit')
  //   .get(pictures.edit);
  //
  // router.route('/pictures/:id/comment')
  //   .post(pictures.createComment)


  module.exports = router;
