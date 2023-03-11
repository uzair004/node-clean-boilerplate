const makeGetProfileC = ({ getProfileUC }) => {
  return async function getProfileC(httpReq, context) {
    try {
      console.log('inside controller');
      const { source, params } = httpReq;
      const { test } = context;

      const { id } = params;

      const result = await getProfileUC({ id, test });

      return result;
    } catch (err) {
      console.error(err);
      return {
        statusCode: 500,
        body: {
          error: {
            code: 'INTERNAL_ERROR',
            message: 'Something went wrong',
            nerdInfo: err.message,
          },
        },
      };
    }
  };
};

module.exports = makeGetProfileC;
