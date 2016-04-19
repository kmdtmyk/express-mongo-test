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
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.furigana}</td>
                                    <td>
                                        <Link to={`/users/${user._id}`}>detail</Link>
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
