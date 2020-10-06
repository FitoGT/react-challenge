const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return [ ...state, action.payload]
        default:
            return []
    }
}

export default productsReducer