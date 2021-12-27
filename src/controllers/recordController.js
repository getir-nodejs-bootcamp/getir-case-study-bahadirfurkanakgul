const success = require("../utils/success");
const ApiError = require("../errors/ApiError");
const recordService = require("../services/recordService");
const httpStatusCodes = require("../utils/httpStatusCodes");

//Filtering request body
const getRecords = async (req, res, next) => {
  const filter = {
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    minCount: req.body.minCount,
    maxCount: req.body.maxCount,
  };
  recordService
    .queryRecords(filter)
    .then((result) => {
      res.send(success({ records: result }));
    })
    .catch((error) =>
      next(new ApiError(error?.message, httpStatusCodes.INTERNAL_SERVER))
    );
};

module.exports = {
  getRecords,
};
