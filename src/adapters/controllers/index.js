// import dependencies
const { missingItem, isEmptyObj, containsSpaces } = require('../utils');

const { signUpUC, getProfileUC } = require('../../application/use_cases');

// import controller
const makeSignUpC = require('./signUpC');
const makeGetProfileC = require('./getProfileC');

// initialize with dependencies
const signUpC = makeSignUpC({
  missingItem,
  isEmptyObj,
  containsSpaces,
  signUpUC,
});

const getProfileC = makeGetProfileC({ getProfileUC });

// export
module.exports = {
  signUpC,
  getProfileC,
};
