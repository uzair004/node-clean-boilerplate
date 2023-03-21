// import dependencies
const { makeId } = require('../../domainUtils');

// import domain entity factory
const buildMakeUser = require('./user');

// initialize, provide dependencies
const makeUser = buildMakeUser({ makeId });

// export instance
module.exports = { makeUser };
