const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema(
    {
        key: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        counts: [
            {
                type: Number,
            },
        ],
        createdAt: {
            type: Date,
            required: true,
        },
    },

);

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;

