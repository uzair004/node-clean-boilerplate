const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    email: { allowNull: false, type: DataTypes.STRING },
    createdAt: { type: DataTypes.INTEGER, allowNull: false },
    updatedAt: { type: DataTypes.INTEGER, allowNull: false },
  });

  User.beforeCreate(async (u) => {
    u.dataValues.createdAt = moment().unix();
    u.dataValues.updatedAt = moment().unix();
  });

  User.beforeUpdate(async (u) => {
    u.dataValues.updatedAt = moment().unix();
  });

  User.associate = (/*models*/) => {};

  return User;
};
