import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component{

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
