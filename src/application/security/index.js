const {
  generateTokenImp,
  decodeTokenImp,
  verifyTokenImp,
} = require('../../infrastructure/security/jwtAccessTokenManager');

const {
  makeGenerateTokenInf,
  makeDecodeTokenInf,
  makeVerifyTokenInf,
} = require('./accessTokenManager');

const generateTokenInf = makeGenerateTokenInf(generateTokenImp);
const decodeTokenInf = makeDecodeTokenInf(decodeTokenImp);
const verifyTokenInf = makeVerifyTokenInf(verifyTokenImp);

module.exports = { generateTokenInf, decodeTokenInf, verifyTokenInf };
