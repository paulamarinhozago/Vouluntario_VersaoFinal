import firebase from 'firebase'
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

export const updatePhoto = (photo) => {
	return {type: 'UPDATE_PHOTO', payload: photo}
}	

export const login = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await firebase.auth().signInWithEmailAndPassword(email, password)
			dispatch(getUser(response.user.uid))
		} catch (e) {
			alert(e)
		}
	}
}

export const getUser = (uid) => {
	return async (dispatch, getState) => {
		try {
			const user = await db.collection('users').doc(uid).get()
			dispatch({type: 'LOGIN', payload: user.data()})
		} catch (e) {
			alert(e)
		}
	}
}

export const updateUser = () => {
  return async ( dispatch, getState )  => {
    const { uid, username, photo } = getState().user
    try {
      db.collection('users').doc(uid).update({
        username: username,
        photo: photo
      })
    } catch(e) {
      alert(e)
    }
  }
}

export const signup = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password, username } = getState().user
			const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
			if(response.user.uid) {
				const user = {
					uid: response.user.uid,
					email: email,
					username: username,
					photo: '',
					token: null,
				}
				db.collection('users').doc(response.user.uid).set(user)
				dispatch({type: 'LOGIN', payload: user})
			}
		} catch (e) {
			alert(e)
		}
	}
}


