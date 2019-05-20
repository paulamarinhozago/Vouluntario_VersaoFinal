export default (state = 0, action) => {
    switch(action) {
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        default:
            return state
    }
}