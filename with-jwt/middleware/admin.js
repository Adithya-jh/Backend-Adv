const jwt = require('jsonwebtoken');

//we need some secret key to verify the jwt
const secret = 'secret';
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const token = req.headers.authorization;
  // the token will look like Bearer sasasasasasasasasasasaa [Bearer is a type of token]
  // so we have to take the token alone.

  const words = token.split(' '); //["Bearer", "sadasdasd"]
  const jwtToken = words[1];

  const decoded = jwt.verify(jwtToken, secret);
  if (decoded.username) {
    next();
  } else {
    res.status(403).json({ message: 'Invalid Token' });
  }
}

module.exports = adminMiddleware;
