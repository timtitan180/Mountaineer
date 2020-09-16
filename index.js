// const bodyParser = require('body-parser');
// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const passport = require('passport');
// const User = require('./user.js');
// // const http = require('http');
// const fs = require('fs');
// const forwardAuthenticated = require('./config/auth');
// const mongoose = require('mongoose');
// const app = express();

// const port = 6520;

// app.use(bodyParser.urlencoded({extended:true}));

// app.use(bodyParser.json());

// router.post('/',function(request,response){
//   var errors = [];
//   const { name,username, email, password, verifyPassword} = request.body;

//   if(!name || !email || !password || !verifyPassword) {
//     errors.push({message: 'All fields must be entered'});
//   }

//   if(password != verifyPassword) {
//     errors.push({message: 'Passwords do not match'});
//   }

//   if(password.length < 10 || password.length > 25) {
//     errors.push({message: 'Password must contain at least 10 characters but no more than 25 characters'});
//   };

//   if(errors.length > 0) {
//     response.render('signup',{
//       errors
//     });
//   } else {
//     const newUser = new User({
//       name,
//       username,
//       email,
//       password
//     });
//   }
// });
// bycrpt.genSalt(10,(error,salt)=>{
//     bycrpt.hash(newUser.password,salt,(error,hash)=>{
//     try {
//       newUser.password = hash;
//       newUser.save();
//     }
//     catch(error) {
//       errors.push({message: `Error, Reason: ${error}`});
//     }
//   });
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
