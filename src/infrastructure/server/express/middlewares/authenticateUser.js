'use strict';

const { authenticateUser } = require('.');

function makeAuthenticateUser({
  decodeToken,
  verifyToken,
  getAuthorizationToken,
}) {
  return async function authenticateUser(req, res, next) {
    try {
      const token = getAuthorizationToken(req);

      if (!token) throw new Error('Missing Token');

      verifyToken({ token });

      const tokenContent = decodeToken({ token });

      const { userId } = tokenContent;

      req.user = {
        id: userId,
      };

      next();
    } catch (err) {
      console.error(err);
      //
      return {
        statusCode: 401,
        body: JSON.stringify({
          message: String(err) ?? 'Error Verifying Token',
        }),
      };
      //
    }
  };
}

module.exports = makeAuthenticateUser;
