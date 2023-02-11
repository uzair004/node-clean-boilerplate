// import & initialize all use cases factories & export

// import dependencies
const { isValidEmail, isValidPassword } = require('../utils');

// import use case factory
const makeSignUpUC = require('./signUpUC');
// initialize with dependencies
const signUpUC = makeSignUpUC({ isValidEmail, isValidPassword });

// export use case
module.exports = { signUpUC };
