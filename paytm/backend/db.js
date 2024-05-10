const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/paytm');

const schema = mongoose.Schema({
  userName: String,
  password: String,
  firstName: String,
  lastName: String,
});

const user = mongoose.model('User', schema);

module.exports = { user };
