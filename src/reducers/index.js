import productsReducer from './product'
import loginReducer from './login'
import loggedUserReducer from './loggedUser'
import cartReducer from './cart'


import { combineReducers } from 'redux' 
const allReducers = combineReducers({
    products:productsReducer,
    login: loginReducer,
    loggedUser : loggedUserReducer,
    cart: cartReducer
})
export default allReducers