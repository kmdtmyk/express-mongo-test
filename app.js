
let path = require('path')

let express = require('express')
let rewrite = require('express-urlrewrite')

let bodyParser = require('body-parser')
let methodOverride = require('method-override')
let morgan = require('morgan')

let webpack = require('webpack')
let webpackDevMiddleware = require('webpack-dev-middleware')
let webpackHotMiddleware = require('webpack-hot-middleware')
let webpackConfig = require('./webpack.config.js')
let compiler = webpack(webpackConfig)

let PORT = 3000

let mongoose = require('mongoose')
let uri = 'mongodb://localhost:27017/test'
mongoose.connect(uri)

mongoose.connection.on('connected', () => {
    console.log('monngose connected')
})


let app = express()

let devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  // noInfo: true,
  stats: {
    colors: true,
    chunks: false
  }
})

let hotMiddleware = webpackHotMiddleware(compiler)


app.use(morgan('dev'))
app.use(methodOverride('_method'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(devMiddleware)
app.use(hotMiddleware)


app.use('/api/users', require('./src/api/users'))
app.use('/api/projects', require('./src/api/projects'))


app.use(rewrite('/users*', '/index.html'))
app.use(rewrite('/projects*', '/index.html'))


app.use(express.static('static'))
app.listen(PORT)
