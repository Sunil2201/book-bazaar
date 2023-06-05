import React from "react";
import "./DealsContainer.css"
import { NavLink } from "react-router-dom";
import {SlArrowRight} from "react-icons/sl"

const deals = [
  {
    heading: "Summer Sale",
    description: "Sale 25% OFF",
    img: `${process.env.PUBLIC_URL}/summerSale.png`,
  },
  {
    heading: "Novel Every Day!",
    description: "Sale 45% OFF",
    img: `${process.env.PUBLIC_URL}/novelEveryDay.png`
  },
];

function DealsContainer() {
  return (
    <div className="dealsContainer">
      {deals.map(({ heading, description, img }) => {
        return (
          <div className="individualDeal">
            <img src={img} alt="an-img" />
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
