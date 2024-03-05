import React ,{useState}from 'react'
import './Signup.css'

function Signup() {
  const[email, setEmail]=useState("");
  const[username,SetUsername]=useState("")
  const[password, setPassword]=useState("");
  return (
    <div className='signup'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadwrXLSLMGMcZZ88Zv9UKTkLfV4fOGxoc9w&usqp=CAU"
       alt="" />

       <input 
       onChange={(e) => setEmail(e.target.value)} value={email}
       type="email" placeholder='Email' />

       <input 
       onChange={(e) => SetUsername(e.target.value)} value={username}
       type="text" placeholder='Username' />

       <input 
       onChange={(e) => setPassword(e.target.value)} value={password}
       type="password" placeholder='password' />
       <button>Sign Up</button>

    </div>
  )
}

export default Signup