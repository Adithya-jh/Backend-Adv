const mongoose = require('mongoose');

mongoose.connect('');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema();

const user = mongoose.model('User', UserSchema);
const admin = mongoose.model('Admin', AdminSchema);
const course = mongoose.model('Course', CourseSchema);

module.exports = {
  user,
  admin,
  course,
};
