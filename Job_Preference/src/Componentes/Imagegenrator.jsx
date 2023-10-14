
import React from 'react'
import { useState } from 'react'
import Searchreg from './Searchreg';
import "../StyleSheet/searchStyle.css"
const Imagegenrator = () => {
  const [img, setImg]=useState("");
const inputEvent=(event)=>{
const data= event.target.value;
console.log(data);
setImg(data);
}
    return (
   <>
   <div className='imagegenratorpage'>

    <input type="text" name="" value={img} id="searchBox" onChange={inputEvent} placeholder='Seacrch image'/>
  <Searchreg search={img} id="searchImg"> </Searchreg>
   </div>
   </>
  )
}

export default Imagegenrator