const { user } = require('../db/index');

const userMiddleware = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  user
    .findOne({
      username: username,
      password: password,
    })
    .then(function (value) {
      if (value) {
        next();
      } else {
        res.status(403).json({
          msg: 'User not valid',
        });
      }
    });
};

module.exports = {
  userMiddleware,
};
