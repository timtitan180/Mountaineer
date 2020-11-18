const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('./config/passport');
const flash = require('express-flash');
const User = require('./models/user');
const myRoutes = require('./models/routes');//importing NodeJs routes (Signup,Login and Dashboard pages will render from these routes)
const ejs = require('ejs');

require('./config/passport')(passport);

const database = 'authenticationdb';

const uri = `mongodb+srv://timtudosa18:Snake150!@first-cluster.fz0ml.mongodb.net/${database}`;//connect MongoDB Atlas to application

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}).then(console.log("MONGODB Connected")).catch(err=>console.log(err));

app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'/public')));

app.set('views',path.join(__dirname + '/views'));

app.use(cookieParser('secret'));

 app.use(
    session({
    cookie: {maxAge:6000},
    resave: true,
    saveUninitialized: true,
    secret: 'secret',
}));
 
passport.initialize();
passport.session();

app.use(flash());

app.use('/',myRoutes);
   
const PORT = process.env.PORT || 6009;


app.listen(PORT,()=> console.log(`App is running on port ${PORT}`));
