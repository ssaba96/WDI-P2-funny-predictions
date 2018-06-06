const mongoose = require('mongoose');

const zodiacSchema = new mongoose.Schema({
  sign: String
});

module.exports = mongoose.model('Zodiac', zodiacSchema);
