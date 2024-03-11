const constants = require('../constants')

const errorHandler = (err, req, res, next) => {
  const status = res.statusCode ? res.statusCode : 500
  res.json({ message: err.message, stackTrace: err.stack })
  // stackTrace will show us the exact line where the error occurred

  // switch for different status codes
  switch (status) {
    case constants.VALIDATION_ERROR:
      res.status(400).json({
        title: 'Validation Filed',
        message: err.message,
        stackTrace: err.stack,
      })
      break
    case constants.NOT_FOUND:
      res.json({
        title: 'Not Found',
        message: err.message,
        stackTrace: err.stack,
      })
      break
    case constants.UNAUTHORIZED:
      res.json({
        title: 'Unauthorized',
        message: err.message,
        stackTrace: err.stack,
      })
      break
    case constants.FORBIDDEN:
      res.json({
        title: 'Forbidden',
        message: err.message,
        stackTrace: err.stack,
      })
      break
    case constants.SERVER_ERROR:
      res.json({
        title: 'Server Error',
        message: err.message,
        stackTrace: err.stack,
      })
    default:
      console.log('No Error Found')
      break
  }
}

module.exports = errorHandler
