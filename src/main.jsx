import React, { Component } from 'react';
import { render } from 'react-dom';

import NavigationBar from './components/NavigationBar';
import Table from './components/Table';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import UserIndex from './components/User/Index';
import UserShow from './components/User/Show';

if(module.hot){
    module.hot.accept();
}


class App extends Component{

    render(){
        return (
            <div>
                <NavigationBar/>
                <div className='ui container'>
                    {this.props.children}
                </div>
            </div>
        )
    }

}

class Index extends Component{

    render(){
        return (
            <div>
                <h1>index</h1>
                <ul>
                    <li><Link to={'users'}>user list</Link></li>
                    <li><Link to={'foo'}>foo</Link></li>
                </ul>
            </div>
        )
    }

}



class NotFound extends Component{

    render(){
        return (
            <div>
                <h1>not found</h1>
            </div>
        )
    }

}


render((
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Index}/>
            <Route path='users'>
                <IndexRoute component={UserIndex}/>
                <Route path=':userId' component={UserShow}/>
            </Route>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
), document.getElementById("example"));
