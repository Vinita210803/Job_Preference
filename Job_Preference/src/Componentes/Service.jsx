import React from 'react';
import Card from './Card';
import Sdata from "./Sdata.jsx"
import "../StyleSheet/Service.css"
import igen from "../Assets/igen.jpg"
import { NavLink } from 'react-router-dom';
const Service = () => {
  return (
    <>
      <div className="services">
      <div className="card" >
  <img className="card-img-top" src={igen} />
  <div className="card-body">
    <h5 className="card-title">IMAGE GENRATOR</h5>
    <p className="card-text">Click button for get Image</p>
    <NavLink to="./imagegenrator" className="btn btn-dark">Genrate Image</NavLink>
  </div>
</div>
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
