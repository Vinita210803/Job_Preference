import React from 'react';
import "../StyleSheet/Common.css";
import Common from './Common';
// import { NavLink } from 'react-router-dom';
const About=()=>{
  return(
    <>
  <Common name="Welcome to About Page" visit="/contact" btname="Contact Now"></Common>
    </>
  )
}
export default About;
