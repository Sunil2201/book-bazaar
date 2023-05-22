import React from "react";
import "./DealsContainer.css"
import { NavLink } from "react-router-dom";
import {SlArrowRight} from "react-icons/sl"

const deals = [
  {
    heading: "Summer Sale",
    description: "Sale 25% OFF",
  },
  {
    heading: "Novel Every Day!",
    description: "Sale 45% OFF",
  },
];

function DealsContainer() {
  return (
    <div className="dealsContainer">
      {deals.map(({ heading, description }) => {
        return (
          <div className="individualDeal">
            <p>{heading}</p>
            <h2>{description}</h2>
            <button><NavLink to="/products">Shop now <SlArrowRight/></NavLink></button>
          </div>
        );
      })}
    </div>
  );
}

export default DealsContainer;
