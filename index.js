const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
const app = express();

const routes = require('./config/routes');
// const User = require('./models/user');
const { port, dbURI } = require('./config/environment');

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));

app.use(expressLayouts);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'ssh it\'s a secret',
  resave: false,
  saveUninitialized: false
}));

// app.use((req, res, next) => {
//   if(!req.session.userId) return next();
//   User
//     .findById(req.session.userId)
//     .populate({path: 'pictures', populate: {path: 'creator'}})
//     .exec()
//     .then((user) =>{
//       res.locals.user = user;
//       res.locals.isLoggedIn = true;
//       next();
//     });
// });

app.use(routes);

app.listen(port, () => console.log(`Express started on port: ${port}`));
