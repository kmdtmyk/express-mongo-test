var React = require('react');
var DefaultLayout = require('../DefaultLayout');

module.exports = React.createClass({
    render: function(){
        return (
            <DefaultLayout>
                <h1>users list</h1>
                <form className='ui search'>
                    <div className='ui icon input'>
                        <input className='prompt' type='text' name='q' placeholder='search' value={this.props.query.q} />
                        <i className='search icon'></i>
                    </div>
                </form>
                <table>
                    {this.props.users.length}
                </table>
            </DefaultLayout>
        );
    }
});



// block content
//
//   h1 users list
//
//   form
//     .ui.search
//       .ui.icon.input
//         input.prompt(type='text', name='q', placeholder='search' value='#{query.q}')
//         i.search.icon
//
//   table.ui.celled.table.striped
//     thead
//       tr
//         th name
//         th furigana
//         th mail address
//         th
//         th
//     tbody
//       each user in users
//         tr
//           td= user.name
//           td= user.furigana
//           td= user.mailAddress
//           td
//             a(href='/users/#{user._id}') show
//           td
//             a(href='/users/#{user._id}/edit') edit
//     tfoot
//       tr
//         th(colspan='5') Total: #{users.length}
//
//
//   a(href='/users/new') new user
