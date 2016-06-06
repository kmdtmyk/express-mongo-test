import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import List from '../containers/List'

import reducer from '../reducers'

let store = createStore(reducer)


export default class Index extends Component {

    render(){
        return (
            <Provider store={store}>
                <List/>
            </Provider>
        )
    }

}
