import productsReducer from './product'
import loginReducer from './login'
import { combineReducers } from 'redux' 
const allReducers = combineReducers({
    products:productsReducer,
    login: loginReducer
})
export default allReducers