
import React from 'react'
import { useParams, useLocation,  } from 'react-router-dom';

const Useparam = () => {
  const location = useLocation();
  const { fname } = useParams();
  console.log(location);
  return (
    <>
      <h1>    plese emter name in serch bar</h1>
      <h1>name is {fname}</h1>
      <p>{location.pathname}</p>
      {location.pathname === `/user/vaibhav` ?
        (<button onClick={()=>{
          alert("you gona right ")
        }}>click me</button>)
        :
   alert("plese write this   /user/vaibhav")}
    </>
  )
}

export default Useparam