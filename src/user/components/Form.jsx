import React, { Component } from 'react'

export default class extends Component {
    render(){
        return (
            <form className='ui form' action={this.props.action} method='post'>
                <div className='field'>
                    <label>name</label>
                    <input type='text' name='user[name]' value={this.props.name} />
                </div>

                <div className='field'>
                    <label>furigana</label>
                    <input type='text' name='user[furigana]' value={this.props.furigana} />
                </div>

                <div className='field'>
                    <label>mail address</label>
                    <input type='text' name='user[mailAddress]' value={this.props.mailAddress} />
                </div>

                <button className='ui button' type='submit'>regist</button>
            </form>
        )
    }
}
