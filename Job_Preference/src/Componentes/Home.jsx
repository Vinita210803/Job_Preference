import React from 'react';
import "../StyleSheet/Common.css"

import Common from './Common';
import { NavLink } from 'react-router-dom';
// home page
const Home=()=>{
  return(
    <>
   <Common name="Grow Your Bussines With " visit="/service" btname="Get Started"></Common>
    </>
  )
}
export default Home;