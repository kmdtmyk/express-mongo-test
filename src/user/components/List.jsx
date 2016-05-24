import React, { Component } from 'react'


export default class extends Component {

    constructor(props){
        super(props)
    }

    render(){

        var tbody = this.props.users.map(function(user){
            return (
                <tr key={user._id}>
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
