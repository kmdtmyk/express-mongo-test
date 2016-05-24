import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'

import Index from './containers/Index'
import New from './containers/New'
import Show from './containers/Show'


export default (
    <Route path='users'>
        <IndexRoute component={Index}/>
        <Route path='new' component={New}/>
        <Route path=':userId' component={Show}/>
    </Route>
)
