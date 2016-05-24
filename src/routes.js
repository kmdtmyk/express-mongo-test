import React, { Component } from 'react'

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import NotFound from './components/NotFound'

import App from './App'
import Index from './Index'

import Projects from './project/route'
import Users from './user/route'


export default (
    <Route path='/' component={App}>
        <IndexRoute component={Index}/>
        {Users}
        {Projects}
        <Route path='*' component={NotFound}/>
    </Route>
)
