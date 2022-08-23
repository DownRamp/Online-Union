require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./controller/index.controller');
var unionRouter = require('./controller/union.controller');

var app = express();
const db = require("./models");
const Role = db.role;
db.sequelize.sync();
// db.sequelize.sync({force: false}).then(() => {
//     console.log('Drop and Resync Db');
//     initial();
//   });
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/union', unionRouter);
require('./controller/auth.controller')(app);
// function initial() {
//     Role.create({
//       id: 1,
//       name: "user"
//     });
   
//     Role.create({
//       id: 2,
//       name: "moderator"
//     });
   
//     Role.create({
//       id: 3,
//       name: "admin"
//     });
//   }
module.exports = app;
