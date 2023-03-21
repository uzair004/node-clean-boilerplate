const makeSignInUC = ({ isValidEmail, isValidPassword, generateTokenInf }) => {
  return async function signInUC(requestInfo) {
    const { email, password } = requestInfo;

    if (!isValidEmail(email)) {
      return {
        statusCode: 400,
        body: {
          error: {
            code: 'INVALID_REQUEST',
            message: 'Invalid Email Provided',
          },
        },
      };
    }

    if (!isValidPassword(password)) {
      return {
        statusCode: 400,
        body: {
          error: {
            code: 'INVALID_REQUEST',
            message:
              'The password must contain at least one uppercase letter, one special character (!@#$&*), one numeric digit, one lowercase letter, and must be at least 8 characters in length',
          },
        },
      };
    }

    //
    return {
      statusCode: 200,
      body: {
        data: {
          id: '101',
          username: 'user1123232',
          email: email,
          token: generateTokenInf({}),
        }, // TODO: replace with created user
      },
    };

    //
  };
};

module.exports = makeSignInUC;
