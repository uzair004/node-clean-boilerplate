module.exports = (webFramework) => {
  const router = webFramework.Router();

  // Define your user routes here
  router.post('signup', () => console.log('signed up...'));

  // some other router
  // import whatever router
  router.use('/whatever', 'whateverRouter(webFramework)');

  return router;
};
