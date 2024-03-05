import React, { useState } from 'react'
import './Login.css'

function Login() {
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");

 

  return (
    <div className='login'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadwrXLSLMGMcZZ88Zv9UKTkLfV4fOGxoc9w&usqp=CAU"
       alt="" />

       <input 
       onChange={(e) => setEmail(e.target.value)}
        type="email" placeholder='Email' value={email} />

       <input 
       onChange={(e) => setPassword(e.target.value)}
        type="password" placeholder='password' value={password} />
       <button>Log in</button>
      
    </div>
  )
}

export default Login
