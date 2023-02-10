module.exports = ({ webFramework, transformer }) => {
  const router = webFramework.Router();

  // Define your user routes here

  router.post(
    '/signup',
    transformer((httpReq) => {
      console.log('body: ', httpReq.body);
    })
  );

  return router;
};
