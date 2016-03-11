var React = require('react');

module.exports = React.createClass({
    render: function(){
        return (
            <table className='ui celled table striped'>
                {this.props.children}
            </table>
        );
    }
});
