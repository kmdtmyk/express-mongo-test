var React = require('react');
var DefaultLayout = require('./DefaultLayout');

module.exports = React.createClass({
    render: function(){
        return (
            <DefaultLayout>
                <a href='users'>users</a>
            </DefaultLayout>
        );
    }
});
