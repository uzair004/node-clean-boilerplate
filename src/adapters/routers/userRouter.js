module.exports = ({ webFramework, transformer }) => {
  const router = webFramework.Router();

  // Define your user routes here

  router.post('/signup', transformer(signUpController));

  return router;
};

async function signUpController() {
  return {
    statusCode: 200,
    body: {
      user: {
        name: 'me',
        email: 'me@mail.com',
      },
    },
  };
  //   return {
  //     statusCode: 400,
  //     body: {
  //       error: { code: 'TESTING', message: 'Testing Error Response' },
  //     },
  //   };
}
