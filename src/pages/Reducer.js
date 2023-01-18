import { combineReducers } from "redux"

const UserReducer=(state={name:"kawish",user:[]},action)=>{
    if(action.type==="ADD USER DETAILS")
    {
        const newArr =state.user
        newArr.push(action.payload)

        return {...state,user:newArr}
    }
    return state

}
export default combineReducers({UserReducer})