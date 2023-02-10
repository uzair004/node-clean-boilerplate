const transformer = require('../../infrastructure/server/express/expressTransformer');

const apiRouter = require('./apiRouter');

module.exports = ({ webFramework }) => {
  const router = webFramework.Router();

  // Example routes
  router.get(
    '/',
    transformer(async (httpReq) => {
      console.log('params: ', httpReq.params);
    })
  );

  router.get('/about', async (req, res) => {
    res.send('Learn more about us');
  });

  // api routes
  router.use('/api', apiRouter({ webFramework, transformer }));

  return router;
};
