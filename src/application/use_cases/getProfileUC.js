const makeGetProfileUC = ({}) => {
  return async function getProfileUC(requestInfo) {
    const { id, test } = requestInfo;

    // suppose we got this from db
    const user = { name: 'John Doe', id: '13232', ...test };

    return {
      statusCode: 200,
      body: {
        data: user,
      },
    };
  };
};

module.exports = makeGetProfileUC;
