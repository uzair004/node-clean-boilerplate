const makeSignInUC = ({
  isValidEmail,
  isValidPassword,
  generateTokenInf,
  makeUser,
}) => {
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

    // get user from db
    // i.e const userInfo = userDb.findUser({email})
    // if user doesn't exist return 404

    const userInfo = { email, password };
    const user = makeUser(userInfo);

    // if(!user.getItem()) return incomplete info
    // entity getItem can contain system enforced rules. i.e id,version should be there

    //
    return {
      statusCode: 200,
      body: {
        data: {
          ...user.getItem(),
          token: generateTokenInf({ id: '101' }),
        },
      },
    };

    //
  };
};

module.exports = makeSignInUC;
