import { combineReducers } from 'redux'
const counter = (state = 115, action) => {
    switch(action.type) {
        case 'ADD':
            return state+1
        case 'SUBTRACT':
            return state-1
        default:
            return state
    }
}

/*const user = (state = {}, action) => {
    switch(action.type) {
        case 'UPDATE_EMAIL':
            return {...state, email: action.payload}
        case 'UPDATE_PASSWORD':
            return {...state, password: action.payload}
        case 'UPDATE_USERNAME':
            return {...state, username: action.payload}
        default:
            return state
    }
}*/

// Redux has a pattern ACR (Action, Compose and Reduce)
// after user did event Action fires first and your state compose it and reducers will do the rest
const user = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload
        case 'UPDATE_EMAIL':
            return{...state, email: action.payload}
        case 'UPDATE_PASSWORD':
            return{...state, password: action.payload}
        case 'UPDATE_USERNAME':
            return{...state, username: action.payload}
        case 'UPDATE_TYPE':
            return{...state, type: action.payload}
        default:
            return state
    }
}

const post = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_DESCRIPTION':
            return{...state, description: action.payload}
        case 'GET_POSTS':
            return{...state, feed: action.payload}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    counter,
    user,
    post
})

export default rootReducer