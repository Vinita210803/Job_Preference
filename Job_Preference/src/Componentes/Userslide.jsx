import React from 'react'
import "../StyleSheet/Userslide.css"
import { NavLink } from 'react-router-dom';
const Userslide = () => {
    return (
        <>
            <section id='usermain'>
                <div className='userheading'>
                    <h1>JobArea                    </h1>
                    <h3>Choose your prafarance for your bussiness and work</h3>
                </div>
                <div className="innermain">

              
                    <div className="userbox">
                        <p className='title'>Create a Job </p>
                       <NavLink id="loginsingup" activeClassName="menu_activ" to="/createjob">Create</NavLink>
                    </div>
            
              
                    <div className="userbox">
                        <p className='title'>Get 
                        a Job </p>
                        <NavLink id="loginsingup" activeClassName="menu_activ" to="/createjob">Get</NavLink>
                    </div>
               
                </div>
            </section>
        </>
    )
}

export default Userslide