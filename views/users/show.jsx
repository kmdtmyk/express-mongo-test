var React = require('react');
var DefaultLayout = require('../DefaultLayout');


module.exports = React.createClass({
    render: function(){
        return (
            <DefaultLayout>
                <h1>user show</h1>
                <div>
                    name: {this.props.user.name}
                </div>
            </DefaultLayout>
        );
    }
});
