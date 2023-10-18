import React from "react";
import { Redirect } from "react-router";
import signupic from "../Assets/signup.svg";
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';
import "../main.css";
import Verification from "./Verification";
function Register() {
  
  const navigate = useNavigate();
function userSignup(e) {
  navigate('/singup/verification');
  // e.preventDefault();
  // console.log("jhuhhb");
  // // --|e|.|preventDefault();
  // let data = {
  //   name: document.getElementById("name").value,
  //   email: document.getElementById("email").value,
  //   phone: document.getElementById("phone").value,
  //   work: document.getElementById("work").value,
  //   password: "pswd",
  //   cpassword: "pswd",
  // };
  // console.log(data);
  // axios
  //   .post("http://localhost:3006/register", data)
  //   .then((res) => {
  //     alert("User register successful");
  //     // return <Redirect to='/Login'/>;
  //   })
  //   .catch((err) => {
  //     alert("some error");
  //   });
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
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    placeholder="Your phone"
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
