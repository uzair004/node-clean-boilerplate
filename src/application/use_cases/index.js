// import & initialize all use cases factories & export

const { generateTokenInf } = require('../../application/security');

const { makeUser } = require('../../domain/entities/user');

// import dependencies
const { isValidEmail, isValidPassword } = require('../utils');

// import use case factory
const makeSignUpUC = require('./signUpUC');
const makeGetProfileUC = require('./getProfileUC');
const makeSignInUC = require('./signInUC');

// initialize with dependencies
const signUpUC = makeSignUpUC({
  isValidEmail,
  isValidPassword,
  generateTokenInf,
  makeUser,
});
const getProfileUC = makeGetProfileUC({});

const signInUC = makeSignInUC({
  isValidEmail,
  isValidPassword,
  generateTokenInf,
});

// export use case
module.exports = { signUpUC, getProfileUC, signInUC };
