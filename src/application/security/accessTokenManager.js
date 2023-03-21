function makeGenerateTokenInf(generateTokenImp) {
  return function generateTokenInf({}) {
    return generateTokenImp({});
  };
}

function makeDecodeTokenInf(decodeTokenImp) {
  return function decodeTokenInf(token) {
    return decodeTokenImp(token);
  };
}

function makeVerifyTokenInf(verifyTokenImp) {
  return function verifyTokenInf(token) {
    return verifyTokenImp(token);
  };
}

module.exports = {
  makeGenerateTokenInf,
  makeDecodeTokenInf,
  makeVerifyTokenInf,
};
