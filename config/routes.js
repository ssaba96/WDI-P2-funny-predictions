const express  = require('express');
const router   = express.Router();

router.get('/', (req, res) => res.render('pages/home'));
router.get('/welcome', (req, res) => res.render('pages/welcome'));
router.get('/signup', (req, res) => res.render('pages/signup'));
router.get('/login', (req, res) => res.render('pages/login'));
router.get('/questions', (req, res) => res.render('pages/questions'));
router.get('/predictions', (req, res) => res.render('pages/predictions'));

module.exports = router;
