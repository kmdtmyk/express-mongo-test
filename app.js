'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let morgan = require('morgan');

let PORT = 3000;

let app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', require('./routes/users'));
app.get('/', (req, res) => {
    res.render('index');
})

app.use(express.static('public'));
app.listen(PORT);
