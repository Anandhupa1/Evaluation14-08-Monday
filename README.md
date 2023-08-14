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




