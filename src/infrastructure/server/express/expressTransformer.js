const makeCallback = (controller) => async (req, res) => {
  const httpReq = {
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

  try {
    const httpResponse = await controller(httpReq);

    if (httpResponse.headers) {
      res.set(httpResponse.headers);
    }

    res.set('Content-Type', 'application/json');
    res.type('json');
    res.status(httpResponse.statusCode).send({
      timestamp: new Date().valueOf(),
      ...httpResponse.body,
    });
  } catch (err) {
    res.status(500).send({
      timestamp: new Date().valueOf(),
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Something went wrong',
        nerdInfo: err.message,
      },
    });
  }
};

module.exports = makeCallback;
