var React = require('react');

module.exports = React.createClass({
    render: function(){
        return (
            <div className='ui inverted menu'>
                <a className='item' href='/' tabIndex='-1'>
                    Home
                </a>
                <a className='item' href='/' tabIndex='-1'>
                    Menu1
                </a>
            </div>
        );
    }
});