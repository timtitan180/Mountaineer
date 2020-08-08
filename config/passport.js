
const mongoose = require('mongoose');
const User = require('../models/user');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = function(passport) {
passport.use(new localStrategy({usernameField:'username'},function(username,password,done){
    User.findOne({username: username}).then(user=>{
      if(!user) {
        return done(null,false,{message:"The username or password is incorrect"});
      }
    });

    bcrypt.compare(password,user.password,function(err,isMatch){
      if(isMatch) {
        return done(null,false,user);
      }
      else {
        return done(null,false,{message:'Password is incorrect'})
      }
  }).catch(err)
}));
  passport.serializeUser(function(user,done){
      done(null,user.id);
  });

  passport.deserializeUser(function(id,done){
      User.findById(id,function(err,user){
      done(err,user);
      });

    });
  }
