import React, { useState } from "react";

import signupic from "../Assets/signup.svg";

import {useNavigate} from 'react-router-dom';
import "../main.css";
import axios from "axios";
import { toast } from "react-toastify";
function Register() {
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const navigate = useNavigate();


async function userSignup(e) {

  try {
    
    const res=await axios.post('http://localhost:8000/register',{
     name,
     password,
     email,
     confirmPassword
    })
  console.log(res.data)
    if(res.data.status===true){
      toast.success(res.data.message);
      navigate('/singup/verification',{
        state:{
          email:email
        }
      });
    }else{
      toast.error(res.data.message)
    }
  } catch (error) {
    toast.error("error")
  }
  
}


  return (
    <>
      <section className=" signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h1 className="form-title">Sign up</h1>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your email"
                  />
                </div>
               
                
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Your password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Confirm  Your password"
                  />
                </div>
                <div className="form-group from-button">
                  <input
                    type="submit"
                    name="register"
                    id="register"
                    className="form-submit"
                    value="register"
                    onClick={userSignup}
                  >
                    
                  </input>
                </div>
              </form>
            </div>
            <div classNaMe="signup-image">
              <figure>
                <img src={signupic} alt="registration pic" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
