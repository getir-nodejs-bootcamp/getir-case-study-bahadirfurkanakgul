const ApiError = require("../errors/ApiError");
const httpStatus = require("../utils/httpStatusCodes");
const validateRecordReqSchema = require("../validations/validate");

// Validator middleware for Record request schema
function validateRecordReq(req, res, next) {
  validateRequest(req, next, validateRecordReqSchema);
}

// General validator middleware.
function validateRequest(req, next, schema) {
  const options = { abortEarly: false }; // include all errors
  const { error, value } = schema.validate(req.body, options);
  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    return next(new ApiError(errorMessage, httpStatus.BAD_REQUEST));
  } else {
    req.body = value;
    next();
  }
}
module.exports = { validateRecordReq };
