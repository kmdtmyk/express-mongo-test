import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import request from 'superagent';

export default class extends Component{

    constructor(){
        super();

        this.state = {
            user: {}
        };

        request
            .get('/api/users/new')
            .end((err, res) => {
                if(err){
                    throw err;
                }
                this.setState({
                    user: res.body
                });
            });

    }

    onChange(e){
        let target = e.target;
        let name = target.name;
        let value = target.value;

        let user = this.state.user;
        user[name] = value;

        this.setState({
            user: user
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state.user);
        browserHistory.push('/users');
    }

    render(){
        return (
            <div>
                <h1>user new</h1>
                <form className='ui form' onSubmit={this.onSubmit.bind(this)}>
                    <div className='field'>
                        <label>name</label>
                        <input type='text' name='name' value={this.state.user.name} onChange={this.onChange.bind(this)} />
                    </div>

                    <div className='field'>
                        <label>furigana</label>
                        <input type='text' name='furigana' value={this.state.user.furigana} onChange={this.onChange.bind(this)} />
                    </div>

                    <div className='field'>
                        <label>mail address</label>
                        <input type='text' name='mailAddress' value={this.state.user.mailAddress} onChange={this.onChange.bind(this)} />
                    </div>

                    <button className='ui button' type='submit'>regist</button>
                </form>
            </div>
        )
    }

}
