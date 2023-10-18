import React from 'react'
import { NavLink } from 'react-router-dom'

const Reset = () => {
  return (
    <>
          <main>
            <div className="forgetinner">
                <h1>Reset Password</h1>
                <div className="form-group">
                                <label htmlFor="Email">
                                <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                            <input type="password" name="email" id="email" autoComplete="off" placeholder ="password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">
                                <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                            <input type="password" name="email" id="email" autoComplete="off" placeholder ="Confirm password" />
                            </div>
                            <button className='googlesing'>
                               <div className="googleimg">
                               </div>
                               <NavLink to="/reset_password/:id/:token" style={{fontSize:"20px", fontFamily:"Poppins, sans-serif", padding:"0px", margin:"0px", color:"gray"}}>Contineu</NavLink>
                               
                                </button>
                          
            </div>
        </main>
    </>
  )
}

export default Reset