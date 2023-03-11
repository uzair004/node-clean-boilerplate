const transformer = require('../expressTransformer');

const apiRouter = require('./apiRouter');

module.exports = ({ webFramework }) => {
  const router = webFramework.Router();

  // Example routes
  router.get(
    '/about',
    transformer(async (req, res) => {
      return {
        statusCode: 200,
        body: {
          data: { message: 'about us' },
        },
      };
    })
  );

  // api routes
  router.use('/api', apiRouter({ webFramework, transformer }));

  return router;
};
