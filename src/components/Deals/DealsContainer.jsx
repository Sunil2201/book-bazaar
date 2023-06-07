import React, { useContext } from "react";
import "./DealsContainer.css";
import { SlArrowRight } from "react-icons/sl";
import { ProductsContext } from "../../contexts/ProductsContext";

const deals = [
  {
    heading: "Summer Sale",
    description: "Sale 25% OFF",
    img: `${process.env.PUBLIC_URL}/summerSale.png`,
  },
  {
    heading: "Novel Every Day!",
    description: "Sale 45% OFF",
    img: `${process.env.PUBLIC_URL}/novelEveryDay.png`,
  },
];

function DealsContainer() {

  const {showSummerSaleProducts, showEverydaySaleProducts} = useContext(ProductsContext)

  return (
    <div className="dealsContainer">
      {deals.map(({ heading, description, img }, idx) => {
        return (
          <div
            className="individualDeal"
            style={{ backgroundImage: `url(${img})` }}
            key={idx}
          >
            <div className="dealContent">
              <p>{heading}</p>
              <h2>{description}</h2>
              <button
                onClick={
                  idx === 0
                    ? () => showSummerSaleProducts()
                    : () => showEverydaySaleProducts()
                }
              >
                Shop now <SlArrowRight />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DealsContainer;
