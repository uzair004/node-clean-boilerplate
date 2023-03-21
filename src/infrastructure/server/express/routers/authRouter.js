const { signUpC, signInC } = require('../../../../adapters/controllers');

module.exports = ({ webFramework, transformer }) => {
  const router = webFramework.Router();

  // Define your user routes here

  router.post('/signup', transformer(signUpC));

  router.post('/signIn', transformer(signInC));

  return router;
};
