const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            localStorage.setItem('products', JSON.stringify([ ...state, action.payload]));
            return [ ...state, action.payload]
        case 'DELETE_PRODUCTS':
            localStorage.setItem('products', JSON.stringify(state.filter((p,key)=>key!==action.payload)));
            return state.filter((p,key)=>key!==action.payload)
        case 'UPDATE_PRODUCTS':
            state[action.payload.id].name = action.payload.name
            state[action.payload.id].price = action.payload.price
            state[action.payload.id].image = action.payload.image
            localStorage.setItem('products', JSON.stringify(state));

            return state
        default:
            return []
    }
}

export default productsReducer