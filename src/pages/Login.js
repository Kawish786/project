import React, { useState, } from 'react'
import '../pages/Login.css' 
import { useNavigate } from 'react-router-dom'

function Login() {
    // const[details,setDetails]=useState({username:'',password:''})
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[authenticate,setAuthenticate]=useState(false)
    // const handleDetail=(e)=>{
    //     setDetails({...details,[e.target.name]:e.target.value})
    // }
    const nav = useNavigate()
    const handlename=(e)=>{
      setUsername(e.target.value)
    }
    const handlepass=(e)=>{
      setPassword(e.target.value)
    }


    const handleClick=async()=>{
      const result=await fetch('http://localhost:3002/user')
      const users =await result.json()
      console.log(users)
      const auth =users.find((ele)=>ele.username===username && ele.password===password)
      if(auth){
        //setAuthenticate(true)
       // nav('/home')
        console.log("Success")
      } 
      
      }
      
           
  return (   
<main className="form-signin">
  <form>
    <h1 className="h3 mb-3 fw-normal" style={{color:'blueviolet'}}> Login</h1>

    <div className="form-floating" >
      <input type="text" className="form-control" id="floatingInput" placeholder="Username" name='user' onChange={handlename} value={username}/>
      <label htmlFor="floatingInput" style={{color:'black'}}>Username</label>
    </div>
    <div className="form-floating">
      <input type={"password"} className="form-control" id="floatingPassword" placeholder="Password" name='pass' onChange={handlepass} value={password}/>
      <label htmlFor="floatingPassword" style={{color:'black'}}>Password</label>
    </div>

    <button className="w-100 btn btn-lg btn-primary" onClick={handleClick}>Sign in</button>
    {authenticate && 
    <h5>Succesfully Login</h5>
    }
    <p className="mt-5 mb-3 text-muted">© 2022–2023</p>
  </form>
</main>
  )
}

export default Login