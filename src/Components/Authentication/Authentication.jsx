import React from 'react';
import './Authentication.css';
import image1 from './Images/1.png';
import Login from './Login';
import Signup from './Signup';
import { useState } from 'react';

function Authentication() {
  const [active,setActive]=useState("login");

    function handleChange(){
      setActive(active === "login" ? "signup" : "login")
    }

  return (
    <div className='authentication'>
      <div className="auth__left">
        <img src={image1} alt="Image 1" />
      </div>
      <div className="auth__right">
        {active === "login" ? <Login/> : <Signup/>}
          <div className="auth__more">
            <span>
            {active === "login" ? (<> Don't have an account? <button onClick={handleChange}>Sign up</button> </>) : (<> Have an account? <button onClick={handleChange}>Log in</button> </>)}

              </span>
          </div>
      </div>
    </div>
  );
}

export default Authentication;
