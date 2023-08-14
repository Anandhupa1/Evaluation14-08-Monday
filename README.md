# Evaluation14-08-Monday

# to run this app locally you need to use your Mongodb atlas connection link with key 'mongoUrl' in .env file.

## /api/register
<hr/>
this route is designed to handle registrationof users
Schema 
`
{
    name : {type:String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true},
}
`
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

 ## 

