import React, { useState } from 'react'
import signupic from '../Assets/login.svg'
import  axios from 'axios';
import '../main.css';
import { NavLink } from 'react-router-dom';
function Login() {
    
    const [email,setEmail] = useState(" ");
    const [password,setPassword] = useState(" ");
    return (
        <>
             <section className=" signup">
            <div className="container ">
                <div className="signup-content">
                <div className="signup-image">
                                    <figure>
                                        <img src={signupic} alt="registration pic" />
                                    </figure>
                                </div>
                    <div className="signup-form">
                        <h1 className="form-title">LogIn</h1>
                            <form className="register-form" id="register-form">
                           
                            <div className="form-group">
                                <label htmlFor="Email">
                                <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                            <input type="email" name="email" id="email" autoComplete="off" placeholder ="Your email" />
                            </div>
                          
                            <div className="form-group">
                                <label htmlFor="password">
                                <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                            <input type="password" name="password" id="password" autoComplete="off" placeholder ="Your password" />
                            </div>
                            <div className="form-group">
                                <NavLink to="/forget" style={{margin:"0", padding:"10px" , color:"#6dabe4"}}>
                                Forgot password?</NavLink>
                            </div>
                           
                            <div className="form-group from-button">
                               <input type="submit" name="signin" id="signin" className="form-submit" 
                               value="Log In" style={{width:"100%" , padding:"10px"}} onClick={userSignin}>
                               </input>

                           </div>
                           <div className="form-group">
                                <button className='googlesing'>
                               <div className="googleimg">
                               </div>
                               <p style={{fontSize:"20px", fontFamily:"Poppins, sans-serif", padding:"0px", margin:"0px", color:"gray"}}>Login with Google</p>
                               
                                </button>
                            </div>

                            </form>
                            </div>
                               


                    


                </div>



            </div>



        </section>
        


        </>
    )
}

function userSignin(e){
    e.preventDefault();
    console.log('jhuhhb')
    // --|e|.|preventDefault();
    let data = {
  
        email:document.getElementById('email').value,

        password:'pswd',
        cpassword
        
        
        :'pswd'
    }
console.log(data)
    axios.post('http://localhost:3006/signin',data)
    .then(res=>[
        alert('User signin successful')
    ])
    .catch(err=>{
        alert('some error')
    })
}

export default Login
