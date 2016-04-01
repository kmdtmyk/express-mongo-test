import React from 'react';


export default class extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "not clicked"
        };
    }

    onClick(){
        this.setState({
            name: "clicked!"
        });
    }

    render(){
        return <div onClick={ this.onClick.bind(this) } >{this.state.name}</div>;
    }
}
