const makeSignInUC = ({
  isValidEmail,
  isValidPassword,
  generateTokenInf,
  makeUser,
  userRepo,
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

    const userInfo = await userRepo.findOneByProperty({
      property: 'email',
      value: email,
    });

    const user = makeUser(userInfo);

    if (!user.getItem()) {
      return {
        statusCode: 404,
        body: {
          error: {
            code: 'RESOURCE_NOT_FOUND',
            message: 'User Not Found',
          },
        },
      };
    }

    //
    return {
      statusCode: 200,
      body: {
        data: {
          ...user.getItem(),
          token: generateTokenInf({ id: user.getId() }),
        },
      },
    };

    //
  };
};

module.exports = makeSignInUC;
