import firebase from 'firebase';

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
    return async (getState) => {
        try {
            const { email, password } = getState().user
            const response = await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log(response)
            // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            //     alert(error)
            // });
        } catch (e) {
            alert(e)
        }
    }
}

export const signup = () => {
    return () => {
        firebase.auth().createUserWithEmailAndPassword(this.props.user.email, this.props.user.password).catch(function(error) {
            alert(error)
        });
    }
}


