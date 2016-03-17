import React from 'react';


export default class extends React.Component{

    constructor(){
        super();
    }

    render(){
        return (
            <table className='ui celled table striped'>
                {this.props.children}
            </table>
        );
    }
    
}
