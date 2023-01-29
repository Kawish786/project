//import { createStore, applyMiddleware} from "redux";
import Reducer from "./Reducer";
//import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit'
//we can also use redux toolkit instead of thunk to call API through func by using this 
//we do not have to call applyMiddleware function 
//const store = createStore(Reducer,applyMiddleware(thunk))
const store=configureStore(
    {
        reducer:Reducer
    }
)
export default store