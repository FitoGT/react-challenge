import productsReducer from './product'
import { combineReducers } from 'redux' 
const allReducers = combineReducers({
    products:productsReducer
})
export default allReducers