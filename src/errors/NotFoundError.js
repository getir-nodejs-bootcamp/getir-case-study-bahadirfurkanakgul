const ApiError = require("./ApiError");
const httpStatusCodes = require("../utils/httpStatusCodes");

class NotFoundError extends ApiError {
  constructor(message) {
    super(message, httpStatusCodes.NOT_FOUND);
  }
}

module.exports = NotFoundError;
