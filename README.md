# Getir Node.js Bootcamp Graduation Project
## The Challenge
Creating a RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.

## Heroku - Deployment
The project is on live.

//deployment link will be here after the auth is given by organisation

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
   jest
   ```

## Endpoints
`POST /records`

Fetches records from database without filter.

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
    "msg": "success",
    "records": [
        {
            "key": "TAKwGc6Jr4i8Z487",
            "createdAt": "2017-01-28T01:22:14.398Z",
            "totalCount": 2800
        }
     ]
}
```