const { connectDB } = require("../../loaders/mongodb");
const mongoose = require("mongoose");
const envPath = __dirname + "/../../../.env";
require("dotenv").config({ path: envPath });

test("Successful connection to database", async () => {
    await connectDB();
});


