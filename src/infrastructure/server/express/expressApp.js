const express = require('express');
const bodyParser = require('body-parser');
const expressLogger = require('express-bunyan-logger');
const cors = require('cors');

const setupRouter = require('../../../adapters/routers');

module.exports = () => {
  const webFramework = express();

  process.on('uncaughtException', (e) => {
    console.log(e);
  });

  webFramework.use(bodyParser.json({ limit: '10mb' }));
  webFramework.use(
    bodyParser.urlencoded({
      limit: '10mb',
      extended: true,
      parameterLimit: 50000,
    })
  );

  webFramework.use(
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
  // webFramework.use(expressLogger.errorLogger());
  webFramework.use(cors());

  webFramework.use(setupRouter(webFramework));

  // catch 404 later
  // webFramework.use((req, res, next) => next("Not Found"));

  // error handling
  // webFramework.use((err, req, res, next) => {
  //   // for now log the error and return 500; need to handle it differently in future
  //   if (res.headersSent) {
  //     return next(err);
  //   }
  //   req.log.error(err);
  //   return res.status(500).send(err.message);
  // });

  return webFramework;
};
