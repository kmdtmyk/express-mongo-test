import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import Index from './containers/Index'


export default (
    <Route path='projects'>
        <IndexRoute component={Index}/>
    </Route>
)
