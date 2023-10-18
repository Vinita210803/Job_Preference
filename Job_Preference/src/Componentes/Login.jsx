import React, { useState } from "react";
import signupic from "../Assets/login.svg";
import axios from "axios";
import "../main.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });

      if (res.data.status === true) {
        navigate('/')
        localStorage.setItem('token',res.data.token)
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
        console.log(error)
      toast.error("error");
    }
  };
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
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    onChange={(e)=>setEmail(e.target.value)}
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
                    placeholder="Your password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <i style={{ margin: "0", padding: "10px", color: "#6dabe4" }}>
                    Forgot password?
                  </i>
                </div>

                <div className="form-group from-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log In"
                    style={{ width: "100%", padding: "10px" }}
                    onClick={login}
                  ></input>
                </div>
                <div className="form-group">
                  <button className="googlesing">
                    <div className="googleimg"></div>
                    <p
                      style={{
                        fontSize: "20px",
                        fontFamily: "Poppins, sans-serif",
                        padding: "0px",
                        margin: "0px",
                        color: "gray",
                      }}
                    >
                      Login with Google
                    </p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



export default Login;
