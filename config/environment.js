module.exports = {
  port: process.env.PORT || 8000,
  dbURI: process.env.MONGODB_URI || 'mongodb://localhost/express-authentication'
};
