import React from 'react';
import "../StyleSheet/Common.css";

import { NavLink } from 'react-router-dom';
const Common=(props)=>{
  return(
    <>
    <section id='main'>
      <div className='left'>
        <h1 className='main-heading'>{props.name} <span style={{color:"#0000cc"}}>V-Web</span></h1>
        <h4 className='sub_heading'>We are team of talanted devloper making websites</h4>
        <button >
        <NavLink to={props.visit}>
        {props.btname}
        </NavLink>
        </button>
      </div>
<div className='right'>
  <div className='img'>
   
  </div>
</div>
    </section>
    </>
  )
}
export default Common;
