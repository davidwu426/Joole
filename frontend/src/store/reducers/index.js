import LoggedReducer from './auth';
import {combineReducers} from 'redux';
import ProductReducer from "./product";

const rootReducer = combineReducers({
    isLoggedIn :  LoggedReducer,
    product : ProductReducer
})

export default rootReducer