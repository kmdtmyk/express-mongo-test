import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
    render(){
        return (
            <div>
                <h1>User list</h1>
                <Link to={'users/new'}>new user</Link>
            </div>
        )
    }
}
