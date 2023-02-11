const makeSignUpUC = ({ isValidEmail, isValidPassword }) => {
  return async function signUpUC(requestInfo) {
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

    // TODO: user with this email already not exist in db

    // TODO: add user to db

    return {
      statusCode: 200,
      body: {
        data: {
          id: '101',
          username: 'user1123232',
          email: email,
        }, // TODO: replace with created user
      },
    };
  };
};

module.exports = makeSignUpUC;
