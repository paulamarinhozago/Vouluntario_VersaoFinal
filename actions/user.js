export const updateEmail = (email) => {
    return {type: 'ADD', payload: email}
}

export const updatePassword = (password) => {
    return {type: 'UPDATE_PASSWORD', payload: password}
}

export const updateUsername = (username) => {
    return {type: 'UPDATE_USERNAME', payload: username}
}



