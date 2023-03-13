const {
  decodeTokenInf,
  verifyTokenInf,
} = require('../../../../application/security');

const makeAuthenticateUser = require('./authenticateUser');

const authenticateUser = makeAuthenticateUser({
  decodeTokenInf,
  verifyTokenInf,
});

module.exports = { authenticateUser };
