'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');

let ejs = require('ejs');
let mongodb = require('mongodb');

let morgan = require('morgan');

let users;
let PORT = 3000;

let app = express();

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
