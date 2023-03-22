const server = require('./express/expressApp');

// bootstrap db connection
require('../database/sequelize/models');

module.exports = server;
