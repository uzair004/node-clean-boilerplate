const { getProfileC } = require('../../../../adapters/controllers');
const { authenticateUser } = require('../middlewares');

module.exports = ({ webFramework, transformer }) => {
  const router = webFramework.Router();

  // Define your user routes here

  router.get('/:id', authenticateUser, transformer(getProfileC));

  return router;
};
