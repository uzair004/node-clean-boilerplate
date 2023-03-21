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

    // user should be returned by user domain with all getters & setters
    // i.e const userInfo = {email, password}
    // const user = makeUser(userInfo)

    // insert user in db using data access layer
    // i.e await userDb.createUser(user.getItem())

    //
    return {
      statusCode: 200,
      body: {
        data: {
          id: '101',
          username: 'user1123232',
          email: email,
          token: generateTokenInf({ id: '101' }), // send any info you want to encode in token, i.e userId
        }, // TODO: replace with created user
      },
    };

    //
  };
};

module.exports = makeSignInUC;
