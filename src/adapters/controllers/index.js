// import dependencies
const { missingItem, isEmptyObj, containsSpaces } = require('../utils');

const {
  signUpUC,
  getProfileUC,
  signInUC,
} = require('../../application/use_cases');

// import controller
const makeSignUpC = require('./signUpC');
const makeGetProfileC = require('./getProfileC');
const makeSignInC = require('./signInC');

// initialize with dependencies
const signUpC = makeSignUpC({
  missingItem,
  isEmptyObj,
  containsSpaces,
  signUpUC,
});

const getProfileC = makeGetProfileC({ getProfileUC });

const signInC = makeSignInC({
  missingItem,
  isEmptyObj,
  containsSpaces,
  signInUC,
});

// export
module.exports = {
  signUpC,
  getProfileC,
  signInC,
};
