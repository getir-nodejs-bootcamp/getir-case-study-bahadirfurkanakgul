const express = require("express");
const loaders = require("./loaders");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const ApiError = require("../src/errors/ApiError");
const NotFoundError = require("../src/errors/NotFoundError");
const routes = require("./routes/recordRoute");
const config = require("./config");
const morgan = require("morgan"); // import morgan
const rfs = require("rotating-file-stream");
const errorHandler = require("./middlewares/errorHandler");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

config();
loaders();

// set security HTTP headers
app.use(helmet());

// enable morgan logger
if (process.env.NODE_ENV === "production")
  app.use(morgan(process.env.LOG_FORMAT || "dev"));
else {
  // create a log stream
  const rfsStream = rfs.createStream(process.env.LOG_FILE || "log.txt", {
    size: process.env.LOG_SIZE || "10M",
    interval: process.env.LOG_INTERVAL || "1d",
    compress: "gzip", // compress rotated files
  });

  app.use(
    morgan(process.env.LOG_FORMAT || "dev", {
      stream: process.env.LOG_FILE ? rfsStream : process.stdout,
    })
  );
}

// enable cors
app.use(cors());
app.options("*", cors());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.APP_PORT || 3000, () => {
  console.log(
    `Application is running on port => ${process.env.APP_PORT || 3000}`
  );
  app.use("/records", routes);
  app.use((req, res, next) => {
    const error = new NotFoundError("Requested path does not exists.");
    next(error);
  });
  app.use(errorHandler);
});
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// if the Promise is rejected this will catch it
process.on("unhandledRejection", (error) => {
  throw new ApiError();
});

module.exports = app;
