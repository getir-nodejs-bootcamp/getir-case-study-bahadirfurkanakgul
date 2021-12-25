const Mongoose = require("mongoose");

const db = Mongoose.connection;

db.once("open", () => {
  console.log("MongoDB'ye baglanti basarilidir..");
});

const connectDB = async () => {
  const { DB_URI_STRING } = process.env;
  await Mongoose.connect(DB_URI_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connectDB,
};
