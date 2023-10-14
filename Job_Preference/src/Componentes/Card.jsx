import React from "react";

import { NavLink } from "react-router-dom";
import "../StyleSheet/Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img className="card-img-top" src={props.imgrc} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <NavLink href="#" className="btn btn-primary">Go somewhere</NavLink> */}
        </div>
      </div>
    </>
  );
};
export default Card;
