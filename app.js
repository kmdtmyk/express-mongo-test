
import path from 'path'

import express from 'express'
import rewrite from 'express-urlrewrite'

import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import morgan from 'morgan'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack.config.js'

import mongoose from 'mongoose'

let compiler = webpack(webpackConfig)

let PORT = 3000

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

import users from './src/api/users'
import projects from './src/api/projects'
import issues from './src/api/issues'

app.use('/api/v1/users', users)
app.use('/api/v1/projects', projects)
app.use('/api/v1/issues', issues)

app.use(express.static('static'))
app.use(rewrite('/*', '/index.html'))
app.use(express.static('static'))


app.listen(PORT)
