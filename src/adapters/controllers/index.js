// import dependencies
const { missingItem, isEmptyObj, containsSpaces } = require('../utils');

const { signUpUC } = require('../../application/use_cases');

// import controller
const makeSignUpC = require('./signUpC');
// initialize with dependencies
const signUpC = makeSignUpC({
  missingItem,
  isEmptyObj,
  containsSpaces,
  signUpUC,
});

// export
module.exports = {
  signUpC,
};
