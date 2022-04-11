module.exports = Object.freeze({
   //2XX
   OK: {
      isSuccess: true,
      status: 200,
      message: 'OK!'
   },
   CREATED: {
      isSuccess: true,
      status: 201,
      message: 'DATA CREATED!'
   },
   ACCEPTED: {
      isSuccess: true,
      status: 202,
      message: 'ACCEPTED!'
   },
   NO_CONTENT: {
      isSuccess: true,
      status: 204,
      message: 'NO_CONTENT!'
   },
   //3XX
   NOT_MODIFIED: {
      isSuccess: true,
      status: 304,
      message: 'NOT_MODIFIED!'
   },
   //4XX
   BAD_REQUEST: {
      isSuccess: false,
      status: 400,
      message: 'BAD_REQUEST'
   },
   UNAUTHORIZED: {
      isSuccess: false,
      status: 401,
      message: 'UNAUTHORIZED'
   },
   FORBIDDEN: {
      isSuccess: false,
      status: 403,
      message: 'FORBIDDEN'
   },
   NOT_FOUND: {
      isSuccess: false,
      status: 404,
      message: 'NOT_FOUND'
   },
   REQUEST_TIMEOUT: {
      isSuccess: false,
      status: 408,
      message: 'REQUEST_TIMEOUT'
   },
   REQUEST_CONFLICT: {
      isSuccess: false,
      status: 409,
      message: 'REQUEST_CONFLICT'
   },
   //5XX
   INTERNAL_SERVER_ERROR: {
      isSuccess: false,
      status: 500,
      message: 'INTERNAL_SERVER_ERROR'
   },
   BAD_GATEWAY_ERROR: {
      isSuccess: false,
      status: 502,
      message: 'BAD_GATEWAY_ERROR'
   },
   SERVICE_UNAVAILABLE_ERROR: {
      isSuccess: false,
      status: 503,
      message: 'SERVICE_UNAVAILABLE_ERROR'
   },
   GATEWAY_TIMEOUT_ERROR: {
      isSuccess: false,
      status: 504,
      message: 'GATEWAY_TIMEOUT_ERROR'
   },
})