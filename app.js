'use strict';

let path = require('path');

let express = require('express');

let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let morgan = require('morgan');

let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let webpackConfig = require('./webpack.config.js');
let compiler = webpack(webpackConfig);

let PORT = 3000;

let app = express();

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(morgan('dev'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
}));

app.use(webpackHotMiddleware(compiler));

app.use('/users', require('./src/routes/users'));
app.get('/', (req, res) => {
    res.render('index');
})

app.use(express.static('static'));
app.listen(PORT);
