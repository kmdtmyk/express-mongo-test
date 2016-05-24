import { combineReducers } from 'redux'

const initialState = {
    users: [
        {
            id: 1, name: 'user1',
        },{
            id: 2, name: 'user2',
        }
    ]
}

export default function(state = initialState, action){
    return state
}
