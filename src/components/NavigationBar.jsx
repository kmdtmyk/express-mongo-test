import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component{

    constructor(){
        super();
    }

    render(){
        return (
            <div className='ui inverted menu'>
                <Link className='item' to='/' tabIndex='-1'>Home</Link>
                <Link className='item' to='/#' tabIndex='-1'>Menu1</Link>
            </div>
        );
    }

}
