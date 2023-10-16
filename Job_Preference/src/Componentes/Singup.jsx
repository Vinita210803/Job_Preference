import React from 'react'
import "../StyleSheet/Login.css";
import { NavLink } from 'react-router-dom';
const Singup = () => {
  return (
    
       <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
        
          <div className="form">
            
           
              <input className='inputfield' type="text" name="username" placeholder="username" />
            
              
              <input className='inputfield' type="text" name="email" placeholder="email" />
            
              
              <input className='inputfield' type="text" name="password" placeholder="password" />
         
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
        <p className="footermsg">
          <span className='msg'>Already have an account? </span>
          <a href="" className='link'><NavLink activeClassName="menu_activ" to="/login" style={{color:"#118aef"}}>Log In</NavLink></a>

        </p>
      </div>
   
  )
}

export default Singup