const { ulid } = require('../infrastructure/libs/ulid');

function makeId() {
  return ulid();
}

module.exports = { makeId };
