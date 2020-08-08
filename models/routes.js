
const express = require('express');
const User = require('./user');
const passport = require('../config/passport');
const router = express.Router();

express.urlencoded({extended:false});

router.get('/',function(req,res){
    res.render('signup',{header: "Sign Up"});
});

router.get('/login',function(req,res){
    res.render('login');
});

// router.post('/login',passport.authenticate('local'),function(req,res){
//     res.render('dashboard');
// });


router.get('/signup',function(req,res){

    res.render('signup',{header:"Validation"});
});

router.post('/signup',function(req,res){
    var errors = []

    const {name,username,email,password,verifiedPassword} = req.body;

    if(!name || !username || !password || !verifiedPassword || !email) {
        console.log(name,username,password,verifiedPassword,email);
        errors.push({msg:"All fields are required"});
    }

    if(password != verifiedPassword) {
        errors.push({msg: "Please make sure passwords match"});
    }
    
    // var emailPattern = "/^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/";

    // if(!data.email.match(emailPattern)) {
    //     errors.push("Please enter a real email");
    // }

    if(errors.length > 0) {
        console.log("Validation failed");
        res.render('signup',{errors});
    }

    User.findOne({username},function(err){
        console.log(err);
        console.log(username);
    });
    newUser = new User({name:name,
        username:username,
        password:password,
        secondPassword:verifiedPassword,
        email:email
    });
    newUser.save(function(err){
      if(err){
        console.log(err);
      }
      else {
        console.log("User has been saved");
        console.log(newUser);
        res.render('dashboard',{header:`Welcome ${newUser.name}`});
      }
    });
});

router.post('/login',function(req,res,next){
    passport.authenticate('local',{
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    });
});

module.exports = router;