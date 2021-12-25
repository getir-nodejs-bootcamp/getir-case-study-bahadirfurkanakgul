const express = require('express');
const mongoose = require('mongoose');
const loaders = require('./loaders')
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const { returnError, isOperationalError} = require('./middlewares/errorHandler');
const logger = require('./utils/logger')
const routes = require('./routes/recordRoute');
const config = require('./config');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

/* let server;
mongoose
    .connect(DB_URI_STRING)
    .then(() => {
    console.log('Connected to MongoDB');
    server = app.listen(APP_PORT, () => {
        console.log(`Listening to port ${APP_PORT}`);
    });
    })
    .catch((err) => {
        logger.error(err)
    });

process.on('SIGTERM', () => {
    console.log('SIGTERM received');
    if (server) {
        server.close();
    }
}); */
config();
loaders();

//Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// set security HTTP headers
app.use(helmet());

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

//When unexpected errors happen, send a notification and restart the app to avoid unexpected behavior.
process.on('uncaughtException', error => {
    logger.error(error)

    if (!isOperationalError(error)) {
        process.exit(1)
    }
})

// if the Promise is rejected this will catch it
process.on('unhandledRejection', error => {
    throw error
})

logger.info("bu bir infodur")

app.listen(process.env.APP_PORT, () => {
    console.log(`Application is running on ${process.env.APP_PORT}`);
  });

module.exports = app;