import React from 'react';
import "../StyleSheet/Common.css";

import { NavLink } from 'react-router-dom';
const Common=(props)=>{
  return(
    <>
    <section id='main'>
      <div className='left'>
        <h1 className='main-heading'>{props.name} <span style={{color:"#0000cc"}}>.</span></h1>
        <h4 className='sub_heading'>Select a choise for pay or get information about goverment funding.</h4>
        <button >
        <NavLink to={props.firstvisit}>
        {props.firstbtname}
        </NavLink>
        </button>
        <button >
        <NavLink to={props.secondvisit}>
        {props.secondbtname}
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
