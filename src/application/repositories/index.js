const { makeUserRepository } = require('./userRepository');

const { userDA } = require('../../infrastructure/data_access');

const userRepository = makeUserRepository({ userDA });

module.exports = { userRepository };
