const makeSignUpUC = ({ isValidEmail, isValidPassword, makeUser }) => {
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

    const userInfo = { email, password };
    const user = makeUser(userInfo); // user domain entity

    // TODO: add user to db
    // i.e userDb.createUser(user.getItem())

    return {
      statusCode: 200,
      body: {
        data: user.getItem(),
      },
    };
  };
};

module.exports = makeSignUpUC;
