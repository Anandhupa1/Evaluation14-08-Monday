# Evaluation14-08-Monday

# to run this app locally you need to use your Mongodb atlas connection link with key 'mongoUrl' in .env file.

## /api/register
<hr/>
this route is designed to handle registrationof users
Schema 
``{
    name : {type:String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true},
}
``
response : 201 - registration successfull
if you gorgot to put any of the required fields it will give you an error message with status code 422
 eg : {message : "please enter your email address"}

 <hr/>

 ## api/login 
  you need to provide registered email and password in the request body to login 
  
  `{email: "anandhupa131@gmail.com, password:"12345"}`

  response : 201 - {message : "Hi anandhu , login successfull", token:"asdfsadfsadfsdf"}
  
  ``you need to store token in the headers with key token``

 <hr/>

 ## POST /api/flights     
 To create a new flight use the following dummy data as reference
 ``
 {
 "airline": "one airlines",
        "flightNo": "1",
        "departure": "111",
        "arrival": "111",
        "departureTime": "2015-03-25",
        "arrivalTime": "2015-03-26",
        "seats": 100,
        "price": 2000
}
 ``
response : 201
 ## GET /api/flights     
 To create a new flight use the following dummy data as reference

  response : 200
 ``

 [
 {
 "airline": "one airlines",
        "flightNo": "1",
        "departure": "111",
        "arrival": "111",
        "departureTime": "2015-03-25",
        "arrivalTime": "2015-03-26",
        "seats": 100,
        "price": 2000
}
 ]
 ``

 ## GET /api/flights/:id     
 To create a new flight use the following dummy data as reference
 response : 200
 ``
 
 {
 "airline": "one airlines",
        "flightNo": "1",
        "departure": "111",
        "arrival": "111",
        "departureTime": "2015-03-25",
        "arrivalTime": "2015-03-26",
        "seats": 100,
        "price": 2000
}
 
 ``


 ## PATCH /api/flights/:id     
This endpoint  allows users to update the details of a specific flight identified by its ID.
 provide data need to be changed in the request body 
 ``
 
 {
 "airline": "one airlines",
        "flightNo": "1",
        "departure": "111",
        "arrival": "111",
        "departureTime": "2015-03-25",
        "arrivalTime": "2015-03-26",
        "seats": 100,
        "price": 2000
}
 
 ``
response : 204 | updated data will be returned 

 ## PATCH /api/flights/:id     
This endpoint  allows users to Delete the details of a specific flight identified by its ID.

response : 202 | deleted data will be returned with data key.
 ``
{
  "message": "deleted successfully ",
  "data": {
    "_id": "64da1b4aa76c84d6406456d9",
    "airline": "one airlinses1234",
    "flightNo": "2",
    "departure": "111",
    "arrival": "134511",
    "departureTime": "2015-03-25T00:00:00.000Z",
    "arrivalTime": "2015-03-26T00:00:00.000Z",
    "seats": 100,
    "price": 2000,
    "__v": 0
  }
}
 
 ``

<br/>


## Booking Route 
<br/>

# POST /api/booking 
This endpoint should allow the user to book flights.
This route is protected , ie you need to have the token in headers 
Also you need to provide flightId in the request body as a key 
``
{
 "flightId":"64da1cb8d4fc2dd8aef8d195"
}

``
response : 201 successfully booked 
``
{
  "user": "64da0ce2574dc04e76b82ca3",
  "flight": "64da1c5ec4ccb0a887a7f39d",
  "_id": "64da267efc37d1125bdd9f17",
  "__v": 0
}
``

response :409 | error : conflict
``
{
  "message": "you have already booked this flight"
}
``

## GET /api/booking
user will get All bookings with flight details
response :200

``
[
  
  {
    "_id": "64da267efc37d1125bdd9f17",
    "user": "64da0ce2574dc04e76b82ca3",
    "flight": "64da1c5ec4ccb0a887a7f39d",
    "__v": 0,
    "flightDetails": [
      {
        "_id": "64da1c5ec4ccb0a887a7f39d",
        "airline": "one airlines1",
        "flightNo": "1",
        "departure": "111",
        "arrival": "111",
        "departureTime": "2015-03-25T00:00:00.000Z",
        "arrivalTime": "2015-03-26T00:00:00.000Z",
        "seats": 100,
        "price": 2000,
        "__v": 0
      }
    ]
  }

]``
## GET /api/booking
admin will get All bookings with userinfo and  flight details
response :200

``
[
  
  {
    "_id": "64da2588fc37d1125bdd9f04",
    "user": "64da0ce2574dc04e76b82ca3",
    "flight": "64da1cb8d4fc2dd8aef8d195",
    "__v": 0,
    "flightDetails": [
      {
        "_id": "64da1cb8d4fc2dd8aef8d195",
        "airline": "one airlines1",
        "flightNo": "2",
        "departure": "111",
        "arrival": "111",
        "departureTime": "2015-03-25T00:00:00.000Z",
        "arrivalTime": "2015-03-26T00:00:00.000Z",
        "seats": 100,
        "price": 2000,
        "__v": 0
      }
    ],
    "userDetails": [
      {
        "_id": "64da0ce2574dc04e76b82ca3",
        "name": "anandhu",
        "email": "anandhupa131@gmail.com",
        "password": "$2b$10$oSYOM/NhmCvoQO6AGFtdbuFSk7XjakEshb3La7pV8ywtu1j0J2l1i",
        "__v": 0
      }
    ]
  },

]``
