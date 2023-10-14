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
     <span>V</span>aibhav
     <span>P</span>andey
     </h2>
 </NavLink>
 </div>
 
 
 <div className='menu-link'>
     <ul className='menu-link-itms'>
         <li className='menu-item'><NavLink activeClassName="menu_activ" exact to="/">Home</NavLink></li>
         <li className='menu-item'><NavLink activeClassName="menu_activ" to="/about">About</NavLink></li>
         <li className='menu-item'><NavLink activeClassName="menu_activ" to="/service">Services</NavLink></li>
         <li className='menu-item'><NavLink activeClassName="menu_activ" to="/contact">Contact</NavLink></li>
     </ul>
 </div>
 <div className='social-media'>
 <ul className="social_media-dexktop">
     <li className='social-itme'><a to="#">F</a></li>
     <li className='social-itme'><a to="#">I</a></li>
     <li className='social-itme'><a to="#">Y</a></li>
 </ul>
 </div>
    </nav>
 
    </>
  )
}
export default Navbar;
