const express = require('express');
const mongoose = require('mongoose');
const loaders = require('./loaders')
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const returnError = require('./middlewares/errorHandler');
const logger = require('./utils/logger')
const routes = require('./routes/recordRoute');
const config = require('./config');
const morgan = require('morgan'); // import morgan
const rfs = require("rotating-file-stream");


config();
loaders();

// set security HTTP headers
app.use(helmet());


// enable morgan logger
if(process.env.NODE_ENV === "production")
    app.use(morgan(process.env.LOG_FORMAT || "dev"))
else{
    // create a log stream
    const rfsStream = rfs.createStream(process.env.LOG_FILE || 'log.txt', {
        size: process.env.LOG_SIZE || '10M',
        interval: process.env.LOG_INTERVAL || '1d',
        compress: 'gzip' // compress rotated files
     });

    app.use(morgan(process.env.LOG_FORMAT || "dev", {
        stream: process.env.LOG_FILE ? rfsStream : process.stdout 
    }));
}

// enable cors
app.use(cors());
app.options('*', cors());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// api routes
app.use('/', routes);

// handle error
app.use(returnError);

// if the Promise is rejected this will catch it
process.on('unhandledRejection', error => {
    throw error
})

logger.info("bu bir infodur")

app.listen(process.env.APP_PORT, () => {
    console.log(`Application is running on ${process.env.APP_PORT}`);
  });

module.exports = app;