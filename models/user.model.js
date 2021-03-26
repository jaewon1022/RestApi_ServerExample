const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    registerDate: {
      type: Date,
    }
  }
);

module.exports = mongoose.model('User', userSchema);