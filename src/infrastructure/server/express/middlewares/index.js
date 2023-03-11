const makeAuthenticateUser = require('./authenticateUser');

const authenticateUser = makeAuthenticateUser({
  decodeToken,
  verifyToken,
  getAuthorizationToken,
});

module.exports = { authenticateUser };
