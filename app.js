'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var ejs = require('ejs');
var mongodb = require('mongodb');

var morgan = require('morgan');

var users;
var PORT = 3000;

var app = express();

// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// app.engine('ejs', ejs.renderFile);

app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', require('./routes/users'));

app.use(express.static('public'));
app.listen(PORT);
