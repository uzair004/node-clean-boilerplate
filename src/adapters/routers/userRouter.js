const { signUpC } = require('../controllers/');

module.exports = ({ webFramework, transformer }) => {
  const router = webFramework.Router();

  // Define your user routes here

  router.post('/signup', transformer(signUpC));

  return router;
};
