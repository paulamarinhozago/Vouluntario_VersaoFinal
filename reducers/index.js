export default (state = 115, action) => {
    switch(action) {
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        default:
            return state
    }
}