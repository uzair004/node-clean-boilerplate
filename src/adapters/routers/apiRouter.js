const userRouter = require('./userRouter');
const authRouter = require('./authRouter');

module.exports = ({ webFramework, transformer }) => {
  const router = webFramework.Router();

  // Define your API routes here

  router.use('/auth', authRouter({ webFramework, transformer }));

  router.use('/users', userRouter({ webFramework, transformer }));

  return router;
};
