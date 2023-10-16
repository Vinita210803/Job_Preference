import React from 'react';
import "../StyleSheet/Common.css";

import { NavLink } from 'react-router-dom';
const Common=(props)=>{
  return(
    <>
    <section id='main'>
      <div className='left'>
        <h1 className='main-heading'>{props.name} <span style={{color:"#0000cc"}}>Job-Junction</span></h1>
        <h4 className='sub_heading'>Hear you are find job and worker so "Let's go to WORK"!!!</h4>
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
