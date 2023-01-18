import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Form() {
    const[username,setUsername]=useState("")
    const[useremail,setUseremail]=useState("")
    const[userid,setUserid]=useState("")
    const nav=useNavigate()
    const dispatch = useDispatch()
    const handleClick=()=>{
        const inputdata={
            name:username,
            email:useremail,
            id:userid
        }
        if(inputdata.name.length>0){
          nav('/home')
          dispatch(
              {
                  type:"ADD USER DETAILS",
                  payload:inputdata
              }
          )
        }
       
       
        /* 
        also dispatch like:
        dispatch(addData(inputdata))
        for this we have to make above action in action.js
        also import addData from action above.
        
        */
    }

  return (
    <main className="form-signin">
  <form>
    <h1 className="h3 mb-3 fw-normal" style={{color:'blueviolet'}}> Form</h1>

    <div className="form-floating" >
      <input type="text" className="form-control" id="floatingInput" placeholder="Username" onChange={ (e)=>setUsername(e.target.value)} value={username}/>
      <label for="floatingInput" style={{color:'black'}}>Username</label>
    </div>
    <div className="form-floating">
      <input type={"email"} className="form-control" id="floatingPassword" placeholder="email"  onChange={(e)=>setUseremail(e.target.value)} value={useremail}/>
      <label for="floatingPassword" style={{color:'black'}}>Email</label>
    </div>
    <div className="form-floating" >
      <input type="text" className="form-control" id="floatingInput" placeholder="Id"  onChange={(e)=>setUserid(e.target.value)} value={userid}/>
      <label for="floatingInput" style={{color:'black'}}>Id</label>
    </div>

    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleClick}>Add Data</button>
    
  </form>

</main>

  )
}

export default Form