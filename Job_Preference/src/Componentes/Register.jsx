import React, { useState } from "react";
import signupic from "../Assets/signup.svg";
import { useNavigate } from "react-router-dom";
import "../main.css";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {

  
  const { ethereum } = window;
  const [address, setAddress] = useState("connect wallet");
  const [balance, setBalance] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  async function checkMetamaskConnection() {
    if (ethereum) {
      try {
        const accounts = await ethereum.enable(); // Prompt the user to connect their Metamask wallet
        if (accounts.length > 0) {
          const userAddress = accounts[0];
          setAddress(userAddress);

          // You can do more with the user's Ethereum address here
          // For example, send a transaction, interact with a smart contract, etc.

          // Show a success message and navigate to the next route
          toast.success("Metamask wallet connected successfully!");
          navigate("/signup/verification", {
            state: {
              email: email,
              ethereumAddress: userAddress,
            },
          });
        }
      } catch (error) {
        // Handle errors, e.g., if the user denies the request
        console.error("Metamask connection error:", error);
      }
    }
  }

  async function userSignup(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/register", {
        name,
        email,
        password,
        confirmPassword,
      });

      if (res.data.status === true) {
        // Prompt the user to connect their Metamask wallet
        checkMetamaskConnection();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Error occurred during registration");
    }
  }

  return (
    <section className="signup">
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
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      boxSizing: "border-box",
                      border: "none",
                      borderBottom: "1px solid #999",
                      borderRadius: "5px",
                      display: "block",

                      width: "100%",
                      fontFamily: "Poppins, sans-serif",
                      margin: "1px",
                      padding: "6px 30px",
                      height: "35px",
                    }}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                  ></input>
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
  );
}
export default Register;
