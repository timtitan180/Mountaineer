const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
require('./config/passport');
const flash = require('connect-flash');

// var routes = require('./models/routes');

require('./config/passport')(passport);

const myRoutes = require('./models/routes');

const database = "authenticationdb";

mongoose.connect(`mongodb://localhost:27017/${database}`,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=> console.log('MongoDB Connected')).catch(error=>console.log(error));

app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'/public')));

app.set('views',path.join(__dirname + '/views'));

app.use('/',myRoutes);

app.use(function(request,response,next){
     response.locals.success_msg = request.flash('success_msg');//messages that will render from views/messages.ejs
     response.locals.error_msg = request.flash('error_msg');
     response.locals.error = request.flash('error');
     next()
 });

 app.use(flash());


 app.use(
    session({
     cookie: {maxAge:6000},
    resave: true,
    saveUninitialized: true,
    secret: 'secret',
}));
 
passport.initialize();
passport.session();


 const PORT = process.env.PORT || 6009;


app.listen(PORT,()=> console.log(`App is running on port ${PORT}` ));
