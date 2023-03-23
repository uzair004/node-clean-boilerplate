const makeGetProfileC = ({ getProfileUC }) => {
  return async function getProfileC(httpReq, context) {
    try {
      const { /*source,*/ params } = httpReq;
      const { user } = context;

      const { id } = params;

      const result = await getProfileUC({ id, user });

      // pass result to userSerializer, get back filtered & formatted data for frontend

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
