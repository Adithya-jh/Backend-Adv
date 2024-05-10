const { admin } = require('../db/index');

const AdminMiddleware = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  admin
    .findOne({
      username: username,
      password: password,
    })
    .then(function (value) {
      if (value) {
        next();
      } else {
        console.log('Admin does not exist');
        res.status(403).json({ msg: 'No Admin' });
      }
    });
};

module.exports = {
  AdminMiddleware,
};
