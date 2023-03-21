'use strict';

const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = 'shhhhhh!';

const generateTokenImp = (payload) => jwt.sign(payload, JWT_SECRET_KEY);

const decodeTokenImp = (accessToken) => jwt.decode(accessToken);

const verifyTokenImp = (token) => {
  try {
    jwt.verify(token, JWT_SECRET_KEY);
  } catch (e) {
    console.error(e);
    throw String(e) ?? 'Could Not Verify Authenticity of the token';
  }
};

module.exports = {
  generateTokenImp,
  decodeTokenImp,
  verifyTokenImp,
};
