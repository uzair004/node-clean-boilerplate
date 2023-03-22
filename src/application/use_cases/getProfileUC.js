const makeGetProfileUC = (/*{}*/) => {
  return async function getProfileUC(requestInfo) {
    const { /*id,*/ user } = requestInfo;

    return {
      statusCode: 200,
      body: {
        data: user,
      },
    };
  };
};

module.exports = makeGetProfileUC;
