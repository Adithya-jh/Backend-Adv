const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://JHA:adith%402003@cluster0.0tkqt.mongodb.net/paytm'
);

const schema = mongoose.Schema({
  userName: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model('User', schema);

module.exports = { User };
