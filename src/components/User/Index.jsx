import React, { Component } from 'react';

import { Link } from 'react-router';

import Table from '../Table';

import request from 'superagent';


export default class extends Component{

    constructor(){
        super();

        this.state = {
            users: []
        };

        request
            .get('/api/users')
            .end((err, res) => {
                if(err){
                    throw err;
                }
                // console.dir(res);
                this.setState({
                    users: res.body
                });
            });


    }

    _delete(user, index){

        let users = this.state.users;
        users.splice(index, 1);
        this.setState({users: users});

        request
            .delete('/api/users/' + user._id)
            .end((err, res) => {
                if(err){
                    throw err;
                }
                this.setState({users: users});
            });
    }

    render(){
        return (
            <div>
                <h1>user list</h1>
                <Link to='/users/new'>new user</Link>
                <Table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>furigana</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.furigana}</td>
                                    <td>
                                        <Link to={`/users/${user._id}`}>detail</Link>
                                    </td>
                                    <td>
                                        <button type='button' onClick={this._delete.bind(this, user, index)}>delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }

}
