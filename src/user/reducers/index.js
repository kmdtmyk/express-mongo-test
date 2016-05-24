import { combineReducers } from 'redux'

const initialState = {
    users: [
        {
            _id: 1, name: 'user1', furigana: 'ユーザ1',
        },{
            _id: 2, name: 'user2',
        },{
            _id: 3, name: 'user3',
        },{
            _id: 4, name: 'user4',
        },{
            _id: 5, name: 'user5',
        },
    ]
}


const user = (user, action) => {
    switch(action.type){
        case 'DELETE_USER':
            if(user._id !== action._id){
                return user
            }
            return Object.assign({}, user, {
                deleteFlag: true
            })
        default:
            return user
    }
}

const users = (users, action) => {
    switch(action.type){
        case 'DELETE_USER':
            return users.map(u => user(u, action))
        default:
            return users
    }

}

export default function(state = initialState, action){
    switch(action.type){
        case 'DELETE_USER':
            return {
                users: users(state.users, action)
            }
        default:
            return state
    }
}
