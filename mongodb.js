// const bodyParser = require('body-parser');
// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const passport = require('passport');
// const User = require('../User');
// // const http = require('http');
// const fs = require('fs');
// const mongoose = require('mongoose');
//
// const port = 6520;
//
//
// app.use(bodyParser.urlencoded({extended:true}));
//
// app.use(bodyParser.json());
//
//
// router.get('/register',forwardAuthenticated,(request,response)=>{
//       res.render('register'));
//
//
// app.post('/',(request,response)=>{
//   var name = request.body.name;
//   var username = request.body.username;
//   var password = request.body.password;
//   var email = request.body.email
//   response.send(`<h2>Hello</h2>`);
// });
//
// app.listen(port,(error)=>{
//   try {
//     console.log(`Hey idiot server is running on port ${port}`);
//   }
//   catch(error) {
//     console.log(`Error processing request. Reason: ${error}`);
//   }
// });
//     var data = [];
//     data = new User();
//     data.push(request.body.getName,request.body.getUsername,request.body.getPassword,request.body.getEmail);
//     data.save(function(err){
//       if(err) {
//           console.log(`Error ${err}`);
//         }
//     response.json({message:'User has been created'});
//     response.json(data);
// });
// };
// });
//<input name="getName>"
//<input name="getPassword>"
//<input name="getEmail>"

//request these inputs from the clients if they have already been validated save them to the model User
//console log to make sure it has been entered
