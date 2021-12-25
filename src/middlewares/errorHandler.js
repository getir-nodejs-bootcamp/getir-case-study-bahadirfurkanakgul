module.exports = (error, req, res, next) => {
    console.log("Error middleware calisti..");
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message || "Internal Server Error....",
      },
    });
  };
  
/* const BaseError = require('../utils/BaseError')
const logger = require('../utils/logger')
const config = require('../config/server')


const returnError = (err, req, res, next) => {
    const response = {
        code: err.statusCode,
        msg: err.message
    };

    if (`${process.env.NODE_ENV}` === 'development') {
        logger.error(err);
    }

    res.status(err.statusCode || 500).send(response);
};

function isOperationalError(error) {
    if (error instanceof BaseError) {
        return error.isOperational
    }
    return false
}

module.exports = {
    returnError,
    isOperationalError
}
 */