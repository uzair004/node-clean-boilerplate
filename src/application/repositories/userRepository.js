// abstract implementation of data access layer present in infrastructure layer

// actual implementation is available in infrastructure/data_access

function makeUserRepository({ userDA }) {
  async function createUser(userData) {
    return userDA.createUser(userData);
  }

  async function updateUser(userId, userData) {
    return userDA.updateUser(userId, userData);
  }

  async function deleteUser(userId) {
    return userDA.deleteUser(userId);
  }

  async function findUserById(userId) {
    return userDA.findUserById(userId);
  }

  async function findAllUsers() {
    return userDA.findAllUsers();
  }

  return {
    createUser,
    updateUser,
    deleteUser,
    findUserById,
    findAllUsers,
  };
}

module.exports = {
  makeUserRepository,
};
