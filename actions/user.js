import db from '../config/firebase'

export const updateEmail = (email) => {
    return {type: 'UPDATE_EMAIL', payload: email}
}

export const updatePassword = (password) => {
    return {type: 'UPDATE_PASSWORD', payload: password}
}

export const updateUsername = (username) => {
    return {type: 'UPDATE_USERNAME', payload: username}
}

//tipos: 1= Pessoa, 2= ONG, 3= Empresa
export const updateType = (type) => {
    return {type: 'UPDATE_TYPE', payload: type}
}

export const login = (email, password) => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch({type: 'LOGIN', payload: response.user})
        } catch (e) {
            alert(e)
        }
    }
}

export const signup = (email, password) => {
    return async (dispatch, getState) => {
        try {
            const { email, password, username, type } = getState().user
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
            dispatch({type: 'SIGNUP', payload: response.user})
            if (response.user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: email,
                    username: username,
                    type: type,
                    photo: '',
                    token: null
                }
                db.collection('users').doc(response.user.uid).set(user)
                dispatch({type: 'SIGNUP', payload: user})
            }
        } catch (e) {
            alert(e)
        }
    }
}


