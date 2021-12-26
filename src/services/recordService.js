const Record = require("../models/Record");

const queryRecords = async (filter) => {
  return Record.aggregate([
    {
      $project: {
        _id: 0,
        key: 1,
        value: 1,
        createdAt: 1,
        totalCount: { $sum: "$counts" },
      },
    },
    {
      $match: {
        createdAt: { $gte: filter.startDate, $lte: filter.endDate },
        totalCount: { $gt: filter.minCount, $lt: filter.maxCount },
      },
    },
  ]);
};

module.exports = {
  queryRecords,
};
