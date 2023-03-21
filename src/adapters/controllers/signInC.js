const makeSignInC = ({ missingItem, isEmptyObj, containsSpaces, signInUC }) => {
  return async function signInC(httpReq) {
    try {
      const { body, source } = httpReq;

      if (!body || isEmptyObj(body)) return missingItem('Body');

      const { email, password } = body;

      if (!email) return missingItem('email');
      if (!password) return missingItem('password');

      if (containsSpaces(email)) {
        return {
          statusCode: 400,
          body: {
            error: {
              code: 'INVALID_REQUEST',
              message: 'Spaces not allowed in email address',
            },
          },
        };
      }

      if (containsSpaces(password)) {
        return {
          statusCode: 400,
          body: {
            error: {
              code: 'INVALID_REQUEST',
              message: 'Spaces not allowed in password',
            },
          },
        };
      }

      const result = await signInUC({ email, password });

      return result;
    } catch (err) {
      console.error(err);
      return {
        statusCode: 500,
        body: {
          error: {
            code: 'INTERNAL_ERROR',
            message: 'Something went wrong',
            nerdInfo: err.message,
          },
        },
      };
    }
  };
};

module.exports = makeSignInC;
