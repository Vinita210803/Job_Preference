import React from 'react';
import Card from './Card';
import Sdata from "./Sdata.jsx"
import "../StyleSheet/Service.css";
const Service = () => {
  return (
    <>
      <div className="services">
     
        {Sdata.map((val, ind) => {
        
          return <Card
            key={ind}
            imgrc={val.imgrc}
            title={val.title}
          >
           
          </Card>
        })}
      </div>
    </>
  )
}
export default Service;
