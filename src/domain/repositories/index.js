const { makeUserRepository } = require('./userRepository');

const { userDA } = require('../../infrastructure/data_access');

const userRepo = makeUserRepository({ userDA });

module.exports = { userRepo };
