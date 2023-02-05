const apiRouter = require('./apiRouter');
const usersRouter = require('./usersRouter');

module.exports = (webFramework) => {
  const router = webFramework.Router();

  router.use('/api', apiRouter(webFramework));
  router.use('/users', usersRouter(webFramework));

  return router;
};
