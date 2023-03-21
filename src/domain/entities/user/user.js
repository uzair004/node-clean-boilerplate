function buildMakeUser({ makeId }) {
  return function makeUser({
    id = makeId(),
    email,
    password,
    permissions = [],
  } = {}) {
    validateInputData();

    return Object.freeze({
      getId: () => id,
      getEmail: () => email,
      getPassword: () => password,
      getPermissions: () => permissions,

      getItem: function () {
        return {
          id: this.getId(),
          email: this.getEmail(),
          password: this.getPassword(),
          permissions: this.getPermissions(),
        };
      },

      // all entities related methods should go here
      // some examples below

      deactivate: function () {},

      addPermission: function () {},

      removePermission: function () {},

      isOldMember: function () {},
    });
  };

  function validateInputData() {}
}

module.exports = buildMakeUser;
