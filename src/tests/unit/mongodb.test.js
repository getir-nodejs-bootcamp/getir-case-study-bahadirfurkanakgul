const { connectDB } = require("../../loaders/mongodb");
const mongoose = require("mongoose");
const envPath = __dirname + "/../../../.env";
require("dotenv").config({ path: envPath });

test("Successful connection to database", () => {
    // process.env.DB_URI_STRING =
    //   "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true";
    connectDB();
});


