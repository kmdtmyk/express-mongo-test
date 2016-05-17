import React, { Component } from 'react'
import { render } from 'react-dom'

import { Router, browserHistory } from 'react-router'

import routes from './routes'



if(module.hot){
    module.hot.accept()
}


render((
    <Router history={browserHistory}>
        {routes}
    </Router>
), document.getElementById("example"))
