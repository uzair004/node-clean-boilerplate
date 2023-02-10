const makeCallback = (controller) => (req, res) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
    method: req.method,
    path: req.path,
    user: req.user,
    logger: req.logger,
    source: {
      ip: req.ip,
      browser: req.get('User-Agent'),
    },
    headers: {
      'Content-Type': req.get('Content-Type'),
      Referer: req.get('referer'),
      'User-Agent': req.get('User-Agent'),
    },
  };

  controller(httpRequest)
    .then((httpResponse) => {
      if (httpResponse.headers) {
        res.set(httpResponse.headers);
      }
      res.set('Content-Type', 'application/json');
      res.type('json');
      res.status(httpResponse.statusCode).send(httpResponse.body);
    })
    .catch((e) => {
      res.status(400).send({
        success: false,
        code: 400,
        error: {
          description: e.message,
        },
      });
    });
};

module.exports = makeCallback;
