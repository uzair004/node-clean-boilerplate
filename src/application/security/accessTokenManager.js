async function makeGenerateTokenInf(generateTokenImp) {
  return async function generateTokenInf() {
    return generateTokenImp();
  };
}

async function makeDecodeTokenInf(decodeTokenImp) {
  return async function decodeTokenInf() {
    return decodeTokenImp();
  };
}

async function makeVerifyTokenInf(verifyTokenImp) {
  return async function verifyTokenInf() {
    return verifyTokenImp();
  };
}

module.exports = {
  makeGenerateTokenInf,
  makeDecodeTokenInf,
  makeVerifyTokenInf,
};
