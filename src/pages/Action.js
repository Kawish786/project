import axios from 'axios';

export function addData(payload){
    return{
        type:"ADD USER DETAILS",
        payload:payload
    }
}

export  const  callData= async(dispatch,getstate)=>{
    const result= await axios.get('https://random-data-api.com//api/users/random_user?size=3')
    const formdata= result.data.map((element)=>{
        return({
            name:element.first_name+' '+element.last_name,
            email:element.email,
            id:element.id
        })
    })
    console.log(dispatch,getstate())
    dispatch(
        {
            type:"API DETAILS",
            payload:formdata
        }
    )
}