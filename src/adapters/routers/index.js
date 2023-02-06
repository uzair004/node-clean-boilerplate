const apiRouter = require('./apiRouter');

module.exports = (webFramework) => {
  const router = webFramework.Router();

  // Example routes
  router.get('/', (req, res) => {
    res.send('Welcome to the home page!');
  });

  router.get('/about', (req, res) => {
    res.send('Learn more about us');
  });

  // api routes
  router.use('/api', apiRouter(webFramework));

  return router;
};
