var React = require('react');
var DefaultLayout = require('../DefaultLayout');
var UserForm = require('./UserForm');


module.exports = React.createClass({
    render: function(){
        return (
            <DefaultLayout>
                <h1>user edit</h1>
                <UserForm action='./' user={this.props.user}/>
            </DefaultLayout>
        );
    }
});
