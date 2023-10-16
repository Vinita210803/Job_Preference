import React from 'react'
import "../StyleSheet/Login.css";
import { NavLink } from 'react-router-dom';
const Login = () => {
  return (
   
     <div className="base-container" >
        <div className="header">Welcome back!</div>
        <div className="content">

          <div className="form">
           
              <input className='inputfield' type="text" name="username" placeholder="username" />
          
           
           
              <input className='inputfield' type="password" name="password" placeholder="password" />
            
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
        <p className="footermsg">
          <span className='msg'>Don't have an account? </span>
          <a href="" className='link' > <NavLink activeClassName="menu_activ" to="/singup" style={{color:'#118aef'}}>Sing Up</NavLink></a>

        </p>
        
      </div>

  )
}

export default Login




