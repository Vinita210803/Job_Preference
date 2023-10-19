import React, { useState } from "react";
import loginic from "../Assets/login.svg"; // Replace with your login image
import axios from "axios";
import "../main.css";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const { ethereum } = window;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function checkMetamaskConnection() {
    if (ethereum) {
      try {
        const accounts = await ethereum.enable(); // Prompt the user to connect their Metamask wallet
        if (accounts.length > 0) {
          const userAddress = accounts[0];
  
          // You can do more with the user's Ethereum address here
          // For example, send a transaction, interact with a smart contract, etc.
  
          return userAddress;
        } else {
          return null; // User denied the request
        }
      } catch (error) {
        console.error("Metamask connection error:", error);
        return null;
      }
    } else {
      return null; // Metamask not available
    }
  }
  async function checkMetamaskAndLogin() {
    const userAddress = await checkMetamaskConnection();
    if (userAddress) {
      // User is connected with Metamask, you can proceed with the login
      try {
        const res = await axios.post("http://localhost:8000/login", {
          email: email,
          password: password,
        });

        if (res.data.status === true) {
          navigate("/");
          localStorage.setItem("token", res.data.token);
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Error during login");
      }
    } else {
      // Metamask connection failed or user denied the request
      toast.warning("Please connect your Metamask wallet to proceed.");
    }
  }

  return (
    <>
      <section className="signup">
      <div className="container ">
          <div className="signup-content">
            <div className="signup-image">
              <figure>
                <img src={loginic} alt="registration pic" />
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
                  <NavLink to="/forget" style={{ margin: "0", padding: "10px", color: "#6dabe4" }}>
                    Forgot password?
                  </NavLink>
                </div>

                <div className="form-group from-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log In"
                    style={{ width: "100%", padding: "10px" }}
                    onClick={checkMetamaskAndLogin}
                  ></input>
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
