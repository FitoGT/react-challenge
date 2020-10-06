const loggedUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGGED_USER':
            return action.payload
        default:
            return state
    }
}

export default loggedUserReducer