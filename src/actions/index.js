export const addProduct = (data) =>({
    type:'ADD_PRODUCTS',
    payload:data
})

export const deleteProduct = (data) =>({
    type:'DELETE_PRODUCTS',
    payload:data
})

export const updateProduct = (data) =>({
    type:'UPDATE_PRODUCTS',
    payload:data
})

export const login = (data) =>({
    type:'LOGIN',
    payload:data
})

export const logout = (data) =>({
    type:'LOGOUT',
    payload:data
})

export const loggedUser = (data) =>({
    type:'LOGGED_USER',
    payload:data
})