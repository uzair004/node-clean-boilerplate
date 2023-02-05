const server = require('./src/infrastructure/server');

const app = server();

const port = 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
