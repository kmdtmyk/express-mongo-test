import React, { Component } from 'react';
import ReactMixin from 'react-mixin';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

import request from 'superagent';

export default class UserNew extends Component{

    constructor(){
        super();

        this.state = {

        };

        request
            .get('/api/users/new')
            .end((err, res) => {
                if(err){
                    throw err;
                }
                this.setState(res.body);
            });

    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        return;
        browserHistory.push('/users');
    }

    render(){
        return (
            <div>
                <h1>user new</h1>
                <form className='ui form' onSubmit={this.onSubmit.bind(this)}>

                    <div className='field'>
                        <label>name</label>
                        <input type='text' valueLink={this.linkState('name')} />
                    </div>

                    <div className='field'>
                        <label>furigana</label>
                        <input type='text' valueLink={this.linkState('furigana')} />
                    </div>

                    <div className='field'>
                        <label>mail address</label>
                        <input type='text' valueLink={this.linkState('mailAddress')} />
                    </div>

                    <button className='ui button' type='submit'>regist</button>
                </form>
            </div>
        )
    }

}

ReactMixin(UserNew.prototype, LinkedStateMixin);
