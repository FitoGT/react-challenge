const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return [ ...state, action.payload]
        case 'DELETE_PRODUCTS':
            return state.filter((p,key)=>key!=action.payload)
        case 'UPDATE_PRODUCTS':
            state[action.payload.id].name = action.payload.name
            state[action.payload.id].price = action.payload.price
            state[action.payload.id].image = action.payload.image

            return state
        default:
            return []
    }
}

export default productsReducer