import React from 'react'
import { NavLink } from 'react-router-dom'

const Forget = () => {
  return (
    <>
        <main>
            <div className="forgetinner">
                <h1>Forget Password</h1>
                <div className="form-group">
                                <label htmlFor="Email">
                                <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                            <input type="email" name="email" id="email" autoComplete="off" placeholder ="Your email" />
                            </div>
                            <button className='googlesing'>
                               <div className="googleimg">
                               </div>
                               <NavLink to="/reset_password/:id/:token" style={{fontSize:"20px", fontFamily:"Poppins, sans-serif", padding:"0px", margin:"0px", color:"gray"}}>Sent</NavLink>
                               
                                </button>
                          
            </div>
        </main>
    </>
  )
}

export default Forget