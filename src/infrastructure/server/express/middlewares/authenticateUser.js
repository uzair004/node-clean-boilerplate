'use strict';

function makeAuthenticateUser({ decodeTokenInf, verifyTokenInf }) {
  return async function authenticateUser(req, res, next) {
    try {
      const token = req.headers.Authorization.split(' ')[1];

      if (!token) throw new Error('Missing Token');

      verifyTokenInf({ token });

      const tokenContent = decodeTokenInf({ token });

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
