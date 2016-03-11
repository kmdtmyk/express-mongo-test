var React = require('react');
var DefaultLayout = require('../DefaultLayout');


module.exports = React.createClass({
    render: function(){
        return (
            <DefaultLayout>
                <h1>user edit</h1>
                <form className='ui form' action='./?_method=patch' method='post'>
                    <div class='field'>
                        <label>name</label>
                        <input type='text' name='user[name]' value={this.props.user.name} />
                    </div>

                    <div class='field'>
                        <label>furigana</label>
                        <input type='text' name='user[furigana]' value={this.props.user.furigana} />
                    </div>

                    <div class='field'>
                        <label>mail address</label>
                        <input type='text' name='user[mailAddress]' value={this.props.user.mailAddress} />
                    </div>

                    <button className='ui button' type='submit'>regist</button>
                </form>
            </DefaultLayout>
        );
    }
});
