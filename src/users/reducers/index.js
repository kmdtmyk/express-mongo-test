import { combineReducers } from 'redux'

const initialState = [
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



const user = (user, action) => {
    switch(action.type){
        default:
            return user
    }
}

const users = (users = initialState, action) => {
    switch(action.type){
        case 'DELETE_USER':
            return users.filter(user => user._id !== action._id)
        default:
            return users
    }

}

export default combineReducers({
    users
})
