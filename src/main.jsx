import React, { Component } from 'react';
import { render } from 'react-dom';

import NavigationBar from './components/NavigationBar';
import Table from './components/Table';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';


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

class UsersIndex extends Component{

    constructor(){
        super();
        let users = [{
            id: 1,
            name: 'user1',
            furigana: 'ユーザ1',
        },{
            id: 2,
            name: 'user2',
            furigana: 'ユーザ2',
        }];
        this.state = {
            users: users
        };
    }

    render(){
        return (
            <div>
                <h1>user list</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>furigana</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => {
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.furigana}</td>
                                    <td>
                                        <Link to={`/users/${user.id}`}>detail</Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <Link to={'/test/1'}>test</Link>
            </div>
        )
    }

}


class UsersShow extends Component{

    render(){
        return (
            <div>
                <h1>user</h1>
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
                <IndexRoute component={UsersIndex}/>
                <Route path=':userId' component={UsersShow}/>
            </Route>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
), document.getElementById("example"));
