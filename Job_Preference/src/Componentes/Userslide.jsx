import React from 'react'
import "../StyleSheet/Userslide.css"
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
                        <p className='title'>Create  a Job </p>
                        <button>CREATE</button>
                    </div>
            
              
                    <div className="userbox">
                        <p className='title'>Get a Job </p>
                        <button>GET</button>
                    </div>
               
                </div>
            </section>
        </>
    )
}

export default Userslide