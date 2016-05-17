import React, { Component } from 'react'

import NavigationBar from './components/NavigationBar'

export default class extends Component{

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
