 const express = require('express');
 const router = express.Router();
 const passport = require('passport');
 const mongoose = require('mongoose');
 

 
    const userSchema = {
    name: {
      type: String,
       required: true
    },
  
    username: {
      type: String,
     required: true
    },
    email: {
      type: String,
     required: true
    },
    password: {
      type: String,
       required: true
    }
  };//Format of the mongoose data
  
    const User = new mongoose.model('User',userSchema);

    express.urlencoded({extended:false});

    router.get('/',function(req,res){
        res.render('signup',req.flash('message', null));
    });
    router.get('/signup',function(req,res){
        res.render('signup');
    });
  
    router.post('/signup',function(req,res){
  
        const {name,username,email,password,verifiedPassword} = req.body;
  
      if(!name || !username || !password || !verifiedPassword || !email) {
            req.flash('message',"Please enter all fields");
            res.redirect('/signup');
            console.log('message',"Please enter all fields");
      }
  
      if(password != verifiedPassword) {
          req.flash('message',"Please make sure passwords match");
          res.redirect('/signup');
          console.log("Passwords do not match");
    
      }
    
      if(!email.includes("@") && !email.includes(".com")) {
            req.flash('message',"Please enter a valid email");
            res.redirect('/signup');
            console.log("Email not valid");
      }
  
      else {
  
         User.findOne({username:username}).then(user=> {
            if(user){
                req.flash('error',`Account already exists Click on Login if you are trying to login`);
                res.render('signup'); 
               res.redirect('/signup');
            }
        });
        const newUser = new User({name:name,
            username:username,
            password:password,
            secondPassword:verifiedPassword,
            email:email
         });
        newUser.save().then(user=> { 
            console.log("User has been saved");
            console.log(user.name);
            res.render('dashboard',{header:`Welcome ${user.name}`});
            res.redirect('/dashboard');
         }).catch(err=>console.log(err));
        }
        });

        router.get('/login',function(req,res){
            res.render('login');
        });
  
        router.post('/login',function(req,res) {
            var existingUsername = req.body.existingUsername;
        User.findOne({username:existingUsername},function(user,err){
                if(!user) {
                    console.log(`User does not exist ${err}`);
                    req.flash('message',"User does not exist");
                    res.redirect('/login');
                }
                else {
                    console.log("Logging in...");
                    res.redirect('/dashboard');
                }
            });        
        });
    
        router.get('/dashboard',function(req,res){
         res.render('dashboard',{header:"Welcome"});
   });

   module.exports = router;
