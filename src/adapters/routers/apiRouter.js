const userRouter = require('./userRouter');

module.exports = (webFramework) => {
  const router = webFramework.Router();

  // Define your API routes here
  router.get('/version', (req, res) => {
    res.send('api version');
  });

  router.use('/users', userRouter(webFramework));

  return router;
};
