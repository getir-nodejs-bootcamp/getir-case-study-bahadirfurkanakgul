const Joi = require("joi");

// create schema object
const validateRecordReqSchema = Joi.object().keys({
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().greater(Joi.ref("startDate")).iso().required(),
  minCount: Joi.number().positive().integer().required(),
  maxCount: Joi.number().positive().integer().required().greater(Joi.ref("minCount")),
});

module.exports = validateRecordReqSchema;
