import React, { Component } from 'react'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { Link } from 'react-router'

import List from '../components/List'
import { deleteUser } from '../actions'


function mapStateToProps(state, ownProps){
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        deleteUser: (user) => {
            dispatch(deleteUser(user._id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
