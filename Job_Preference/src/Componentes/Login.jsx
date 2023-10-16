import React from 'react'
import signupic from '../Assets/login.svg'
import  axios from 'axios';
import '../main.css';
function Login() {
    return (
        <>
             <section className=" signup">
            <div className="container mt-5">
                <div className="signup-content">
                <div className="signup-image">
                                    <figure>
                                        <img src={signupic} alt="registration pic" />
                                    </figure>
                                </div>
                    <div className="signup-form">
                        <h1 className="form-title">Sign In</h1>
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
                           
                            <div className="form-group from-button">
                               <input type="submit" name="signin" id="signin" className="form-submit" 
                               value="Log In" onClick={userSignin}>
                               </input>

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
        cpassword:'pswd'
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
