const mongoose = require('mongoose');

const Appschema = new mongoose.Schema({
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
});

//this is an object that represents a document in mongodb. This will be used everytime a user registers on signup.ejs
var User = mongoose.model('User',Appschema);
module.exports = User;
