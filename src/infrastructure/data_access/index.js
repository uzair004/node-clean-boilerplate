const makeUserDA = require('./user_data_access/mySqlUserDb');

const userDA = makeUserDA({});

module.exports = { userDA };
