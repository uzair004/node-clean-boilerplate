function missingItem(item) {
  return {
    statusCode: 400,
    body: { error: { code: 'INVALID_REQUEST', message: `Missing ${item}` } },
  };
}

function isEmptyObj(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  );
}

function containsSpaces(str) {
  return str.indexOf(' ') >= 0;
}

module.exports = { missingItem, isEmptyObj, containsSpaces };
