import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {

    constructor(props){
        super(props)
    }

    _delete(user){
        console.log(user);
        this.props.deleteUser(user);
    }

    render(){
        const { deleteUser } = this.props

        var tbody = this.props.users.map((user) => {
            return (
                <tr key={user._id}>
                    <td>
                        {user.name}
                        {user.deleteFlag ? ' - delete' : ''}
                    </td>
                    <td>{user.furigana}</td>
                    <td>{user.mailAddress}</td>
                    <td>
                        <Link to={'/users/' + user._id}>show</Link>
                    </td>
                    <td>
                        <Link to={'/users/' + user._id + '/edit'}>edit</Link>
                    </td>
                    <td>
                        <button onClick={this._delete.bind(this, user)}>delete</button>
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <h1>User list</h1>
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

                    </tfoot>
                </table>
            </div>
        )
    }

}
