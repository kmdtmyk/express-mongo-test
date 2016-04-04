var React = require('react');


module.exports = React.createClass({
    render: function(){
        return (
            <form className='ui form' action={this.props.action} method='post'>
                <div className='field'>
                    <label>name</label>
                    <input type='text' name='user[name]' value={this.props.user.name} />
                </div>

                <div className='field'>
                    <label>furigana</label>
                    <input type='text' name='user[furigana]' value={this.props.user.furigana} />
                </div>

                <div className='field'>
                    <label>mail address</label>
                    <input type='text' name='user[mailAddress]' value={this.props.user.mailAddress} />
                </div>

                <button className='ui button' type='submit'>regist</button>
            </form>
        );
    }
});
