import { combineReducers } from 'redux'

const initialState = {
    users: [
        {
            _id: 1, name: 'user1',
        },{
            _id: 2, name: 'user2',
        }
    ]
}

export default function(state = initialState, action){
    return state
}
