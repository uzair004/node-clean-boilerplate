// db methods related to user that uses mysql/sequelize

const { User } = require('../../database/sequelize/models'); // Assuming you have defined Sequelize models in models.js

function makeUserDA({}) {
  return Object.freeze({
    createUser,
    updateUser,
    deleteUser,
    findUserById,
    findAllUsers,
    findOneByProperty,
  });
}

async function createUser(userData) {
  const user = await User.create(userData);
  return user.toJSON();
}

async function updateUser(userId, userData) {
  const [updatedRowsCount] = await User.update(userData, {
    where: { id: userId },
  });
  return updatedRowsCount > 0;
}

async function deleteUser(userId) {
  const deletedRowsCount = await User.destroy({ where: { id: userId } });
  return deletedRowsCount > 0;
}

async function findUserById(userId) {
  const user = await User.findByPk(userId);
  return user && user.toJSON();
}

async function findAllUsers() {
  const users = await User.findAll();
  return users.map((user) => user.toJSON());
}

async function findOneByProperty({ property, value }) {
  const whereClause = { [property]: value };
  const user = await User.findOne({ where: whereClause });
  if (user) return user.toJSON();
  else return undefined;
}

module.exports = makeUserDA;
