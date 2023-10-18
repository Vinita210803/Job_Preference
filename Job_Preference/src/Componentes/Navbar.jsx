import React from 'react';
import "../StyleSheet/NavBar.css";
import { NavLink } from 'react-router-dom';
const Navbar=()=>{
  return(
    
    <>
    <nav className='main_nav'>
 <div className='logo'>
 <NavLink to="/">

     <h2 className='logo-color'>
     <span>G</span>ovrn
     <span>F</span>und
     </h2>
 </NavLink>
 </div>
 
 
 <div className='menu-link'>
     <ul className='menu-link-itms'>
         <li className='menu-item'><NavLink activeClassName="menu_activ" exact to="/">Home</NavLink></li>
         <li className='menu-item'><NavLink activeClassName="menu_activ" to="/info">Info</NavLink></li>
         <li className='menu-item'><NavLink activeClassName="menu_activ" to="/pay">Pay</NavLink></li>
         <li className='menu-item'><NavLink activeClassName="menu_activ" to="/contact">Contact</NavLink></li>
     </ul>
 </div>
 <div className='rightnav'>
         <li   className='rightnav-item'><NavLink id="loginsingup" activeClassName="menu_activ" to="/login">Log In</NavLink></li>
         <li   className='rightnav-item'><NavLink id="loginsingup" activeClassName="menu_activ" to="/singup">Sing Up</NavLink></li>
 </div>
 
    </nav>
 
    </>
  )
}
export default Navbar;
