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
                <UserList users={this.props.users}>
                </UserList>
                <a href='/users/new'>new user</a>
            </DefaultLayout>
        );
    }
});

var UserList = React.createClass({
    render: function(){

        var tbody = this.props.users.map(function(user){
            return (
                <tr>
                    <td>{user.name}</td>
                    <td>{user.furigana}</td>
                    <td>{user.mailAddress}</td>
                    <td>
                        <a href={'/users/' + user._id}>show</a>
                    </td>
                    <td>
                        <a href={'/users/' + user._id + '/edit'}>edit</a>
                    </td>
                </tr>
            );
        });

        return (
            <table className='ui celled table striped'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>furigana</th>
                        <th>mail address</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tbody}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan='5'>
                            Total: {this.props.users.length}
                        </th>
                     </tr>
                </tfoot>
            </table>
        );
    }
})
