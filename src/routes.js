import React, { Component } from 'react'

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import NotFound from './components/NotFound'

import App from './App'
import Index from './Index'


import UserIndex from './components/User/Index'
import UserShow from './components/User/Show'
import UserNew from './components/User/New'

import Projects from './project/route'


export default (
    <Route path='/' component={App}>
        <IndexRoute component={Index}/>
        <Route path='users'>
            <IndexRoute component={UserIndex}/>
            <Route path='new' component={UserNew}/>
            <Route path=':userId' component={UserShow}/>
        </Route>
        {Projects}
        <Route path='*' component={NotFound}/>
    </Route>
)
