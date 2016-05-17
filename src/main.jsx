import React, { Component } from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import NavigationBar from './components/NavigationBar';
import NotFound from './components/NotFound';

import UserIndex from './components/User/Index';
import UserShow from './components/User/Show';
import UserNew from './components/User/New';

import Projects from './project/route'

console.log(Projects)

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
                    <li><Link to={'projects'}>project list</Link></li>
                    <li><Link to={'users'}>user list</Link></li>
                    <li><Link to={'foo'}>foo</Link></li>
                </ul>
            </div>
        )
    }

}



render((
    <Router history={browserHistory}>
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
    </Router>
), document.getElementById("example"));
