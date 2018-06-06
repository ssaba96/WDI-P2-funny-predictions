const mongoose = require('mongoose');

const horoscopeSchema = new mongoose.Schema({
  prediction: String
});

module.exports = mongoose.model('Horoscope', horoscopeSchema);
