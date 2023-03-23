'use strict';

const tableName = 'users';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable(tableName, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: { type: Sequelize.INTEGER, allowNull: false },
      updatedAt: { type: Sequelize.INTEGER, allowNull: false },
    });
  },

  down(queryInterface /*Sequelize*/) {
    return queryInterface.dropTable(tableName);
  },
};
