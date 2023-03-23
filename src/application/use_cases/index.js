// import & initialize all use cases factories & export

const { generateTokenInf } = require('../../application/security');

const { makeUser } = require('../../domain/entities/user');

// import dependencies
const { isValidEmail, isValidPassword } = require('../appUtils');

// repositories
const { userRepo } = require('../../domain/repositories');

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
  userRepo,
});
const getProfileUC = makeGetProfileUC({});

const signInUC = makeSignInUC({
  isValidEmail,
  isValidPassword,
  generateTokenInf,
  makeUser,
  userRepo,
});

// export use case
module.exports = { signUpUC, getProfileUC, signInUC };
