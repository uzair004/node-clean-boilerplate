const server = require('./src/infrastructure/server');

const app = server();

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App is listening on port ${port}`);
});
