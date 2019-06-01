import firebase from 'firebase'
import db from '../config/firebase'

export const updateDescription = (text) => {
    return {type: 'UPDATE_DESCRIPTION', payload: text}
}

export const uploadPost = () => {
	return async (dispatch, getState) => {
		try {
			const { post, user } = getState()
			const upload = {
				postPhoto: 'https://firebasestorage.googleapis.com/v0/b/vouluntario.appspot.com/o/ambiental.jpg?alt=media&token=061cfdf0-3f54-4f8c-99ac-6b6b7508cfea',
				postDescription: post.description,
				// uid: this.props.user.uid,
				// photo: this.props.user.photo,
				// username: this.props.user.username,
			}

			const ref = await db.collection('posts').doc()
			upload.id = ref.id
			ref.set(upload)

		} catch (e) {
			alert(e)
		}
	}
}

export const getPosts = () => {
	return async (dispatch, getState) => {
		try {
			const posts = await db.collection('posts').get()
			
			let array = []
			posts.forEach((post)=>{
				array.push(post.data())
			})
			console.log(array)
			dispatch({type: 'GET_POSTS', payload: array})
		} catch (e) {
			alert(e)
		}
	}
}




