const BaseError = require('../utils/BaseError')
const httpStatus = require('../utils/httpStatusCodes');
const validateRecordReqSchema = require('../validations/validate')

function validateRecordReq(req, res, next) {
    validateRequest(req, next, validateRecordReqSchema);
}

function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        const errorMessage = error.details.map((details) => details.message).join(', ');
        return next(new BaseError(httpStatus.BAD_REQUEST, errorMessage));

    } else {
        req.body = value;
        next();
    }
}
module.exports = { validateRecordReq };
