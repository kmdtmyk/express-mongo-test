var React = require('react');
var DefaultLayout = require('./DefaultLayout');

module.exports = React.createClass({
    render: function(){
        return (
            <DefaultLayout>
                <div id='example'></div>
                <script src='/build/main.js'></script>
            </DefaultLayout>
        );
    }
});
