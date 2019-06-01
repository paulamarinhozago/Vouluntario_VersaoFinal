import { combineReducers } from 'redux'

const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload
    case 'UPDATE_EMAIL':
      return {...state, email: action.payload}
    case 'UPDATE_PASSWORD':
      return {...state, password: action.payload}
    case 'UPDATE_USERNAME':
      return {...state, username: action.payload}
    case 'UPDATE_TYPE':
      return{...state, type: action.payload}
    default:
      return state
  }
}

const post = (state=null, action) => {
  switch (action.type) {
    case 'UPDATE_DESCRIPTION':
      return {...state, description: action.payload}
    case 'GET_POSTS':
      return {...state, feed: action.payload}
    default:
      return state
  }
}

const rootReducer = combineReducers({
	user,
    post,
})

export default rootReducer
