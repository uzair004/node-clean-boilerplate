// import & initialize all use cases factories & export

// import dependencies
const { isValidEmail, isValidPassword } = require('../utils');

// import use case factory
const makeSignUpUC = require('./signUpUC');
const makeGetProfileUC = require('./getProfileUC');

// initialize with dependencies
const signUpUC = makeSignUpUC({ isValidEmail, isValidPassword });
const getProfileUC = makeGetProfileUC({});

// export use case
module.exports = { signUpUC, getProfileUC };
