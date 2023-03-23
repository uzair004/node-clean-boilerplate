const express = require('express');
const bodyParser = require('body-parser');
const expressLogger = require('express-bunyan-logger');
const cors = require('cors');

const setupRouter = require('./routers');

module.exports = () => {
  const app = express();

  process.on('uncaughtException', (e) => {
    console.error(e);
  });

  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(
    bodyParser.urlencoded({
      limit: '10mb',
      extended: true,
      parameterLimit: 50000,
    })
  );

  app.use(
    expressLogger({
      excludes: [
        'headers',
        'req',
        'user-agent',
        'short-body',
        'http-version',
        'req-headers',
        'res-headers',
        'body',
        'res',
      ], // remove extra details from log
    })
  );
  // app.use(expressLogger.errorLogger());
  app.use(cors());

  app.use(setupRouter({ webFramework: express }));

  // catch 404 later
  // app.use((req, res, next) => next("Not Found"));

  // error handling
  // app.use((err, req, res, next) => {
  //   // for now log the error and return 500; need to handle it differently in future
  //   if (res.headersSent) {
  //     return next(err);
  //   }
  //   req.log.error(err);
  //   return res.status(500).send(err.message);
  // });

  return app;
};
