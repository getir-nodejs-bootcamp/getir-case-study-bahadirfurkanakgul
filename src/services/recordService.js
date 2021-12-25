const Record = require('../models/Record');

const queryRecords = async(filter) => {
    return Record.aggregate([
        
        {
            $project: { 
                "_id" : 0,
                "key": 1, 
                "value": 1, 
                "createdAt": 1, 
                "totalCount": { "$sum": "$counts" }
            }
        },
        {
            $match: { 
                "createdAt": { $gte: filter.startDate, $lte: filter.endDate},
                "totalCount": { $gt: filter.minCount, $lt: filter.maxCount }
            }
        }
    ]);

/* async (filter) => {
    const matches = [];
    const aggregationQuery = [
        {
            $project: {
                _id: 0,
                key: 1,
                createdAt: 1,
                totalCount: { $sum: '$counts' },
            },
        },
    ];

    if (filter.startDate) {
        matches.push({ createdAt: { $gt: new Date(filter.startDate) } });
    }
    if (filter.endDate) {
        matches.push({ createdAt: { $lt: new Date(filter.endDate) } });
    }
    if (filter.minCount !== undefined) {
        matches.push({ totalCount: { $gt: filter.minCount } });
    }
    if (filter.maxCount !== undefined) {
        matches.push({ totalCount: { $lt: filter.maxCount } });
    }
    if (matches.length !== 0) {
        aggregationQuery.push({
            $match: {
                $and: matches,
            },
        });
    }
 
    let records;
    records = await Record.aggregate(aggregationQuery);
    return records;*/
};



module.exports = {
    queryRecords,
};

