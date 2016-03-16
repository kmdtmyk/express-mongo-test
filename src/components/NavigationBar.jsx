import React from 'react';


export default class extends React.Component{

    constructor(){
        super();
    }

    render(){
        return (
            <div className='ui inverted menu'>
                <a className='item' href='/' tabIndex='-1'>
                    Home
                </a>
                <a className='item' href='/' tabIndex='-1'>
                    Menu1
                </a>
            </div>
        );
    }

}
