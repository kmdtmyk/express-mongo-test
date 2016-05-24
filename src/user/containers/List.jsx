import React, { Component } from 'react'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import { Link } from 'react-router'

import List from '../components/List'


function mapStateToProps(state){
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
