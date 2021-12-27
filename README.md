Cloned from: https://github.com/akglbahadr/getir-case-study-bahadirfurkanakgul

# Getir Node.js Bootcamp Graduation Project
## The Challenge
Creating a RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.

## Heroku - Deployment
The project is live.

https://bahadirfurkanakgul-getir-case.herokuapp.com/

## For Swagger Documentation 

https://bahadirfurkanakgul-getir-case.herokuapp.com/docs

## Installation
1. Clone the repo 
   ```
    git clone https://github.com/akglbahadr/getir-case-study-bahadirfurkanakgul.git
   ```
2. Install NPM packages
   ```
    npm install
   ```
3. Rename .env.example file as .env
   
## Usage
Run the command to start the app with node
   ```
   npm run start
   ```
Run the command to start the app with nodemon
   ```
   npm run start-dev
   ```
Run the command for unit and integration tests
   ```
   npm run test
   ```

## Endpoints
`POST /records`

Request Payload
```
Sample request: {
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700, 
  "maxCount": 3000
 } 
``` 
Response Payload 
```
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "ibfRLaFT",
            "value": "AlpgKxsdliUG",
            "createdAt": "2016-12-25T16:43:27.909Z",
            "totalCount": 2892
        },
        {
            "key": "pxClAvll",
            "value": "pxWfhQUtqkvS",
            "createdAt": "2016-12-19T10:00:40.050Z",
            "totalCount": 2772
        }
    ]
}
```

## Dependencies
```
    "config": "^3.3.6",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "helmet": "^4.6.0",
    "joi": "^17.4.2",
    "mongoose": "^6.0.12",
    "morgan": "^1.10.0",
    "rotating-file-stream": "^3.0.2",
    "swagger-ui-express": "^4.3.0"
```
## DevDependencies
```
    "jest": "^27.4.5",
    "nodemon": "^2.0.15",
    "supertest": "^6.1.6"
```
