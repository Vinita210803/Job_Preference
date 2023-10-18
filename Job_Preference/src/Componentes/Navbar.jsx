import React, { useEffect, useState } from "react";
import "../StyleSheet/NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate();
  const [token,setToken]=useState();
  useEffect(()=>{
     setToken(localStorage.getItem('token'))
  },[token])

  const logout=async(e)=>{

    await localStorage.removeItem('token')
    navigate('/login')

  }
  return (
    <>
      <nav className="main_nav">
        <div className="logo">
          <NavLink to="/">
            <h2 className="logo-color">
              <span>G</span>ovrn
              <span>F</span>und
            </h2>
          </NavLink>
        </div>

        <div className="menu-link">
          <ul className="menu-link-itms">
            <li className="menu-item">
              <NavLink activeClassName="menu_activ" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeClassName="menu_activ" to="/info">
                Info
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeClassName="menu_activ" to="/pay">
                Pay
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeClassName="menu_activ" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="rightnav">
          {token ? (
            <>
              <li className="rightnav-item">
                <NavLink
                  id="loginsingup"
                  activeClassName="menu_activ"
                  
                  onClick={logout}
                >
                  Sign out
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="rightnav-item">
                <NavLink
                  id="loginsingup"
                  activeClassName="menu_activ"
                  to="/login"
                >
                  Log In
                </NavLink>
              </li>
              <li className="rightnav-item">
                <NavLink
                  id="loginsingup"
                  activeClassName="menu_activ"
                  to="/singup"
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
