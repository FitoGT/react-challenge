import productsReducer from './product'
import loginReducer from './login'
import loggedUserReducer from './loggedUser'

import { combineReducers } from 'redux' 
const allReducers = combineReducers({
    products:productsReducer,
    login: loginReducer,
    loggedUser : loggedUserReducer
})
export default allReducers