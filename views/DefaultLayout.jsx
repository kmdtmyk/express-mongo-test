var React = require('react');
var MenuBar = require('./MenuBar');

module.exports = React.createClass({
    render: function(){
        return (
            <html>
                <head>
                    <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css'/>
                    <script src='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js'></script>
                </head>
                <body>
                    <MenuBar></MenuBar>
                    <div className='ui container'>
                        {this.props.children}
                    </div>
                </body>
            </html>
        );
    }
});
