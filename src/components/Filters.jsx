import React, { useContext } from "react";
import "../index.css";
import { ProductsContext } from "../contexts/ProductsContext";

function Filters() {
  const {
    categories,
    handleSlider,
    priceFilter,
    ratingFilter,
    sortingOrder,
    handleCategory,
    handleRating,
    handleSortingOrder,
  } = useContext(ProductsContext);

  const ratings = [
    "1 Stars & above",
    "2 Stars & above",
    "3 Stars & above",
    "4 Stars & above",
  ];

  return (
    <div className="filterContainer">
      <div className="filterHeader">
        <p>
          <strong>Filters</strong>
        </p>
        <p>Clear</p>
      </div>
      <div className="priceFilter">
        <p>
          <strong>Price</strong>
        </p>
        <div className="availablePrices">
          <p>100</p>
          <p>500</p>
          <p>1000</p>
        </div>
        <input
          type="range"
          min="100"
          max="1000"
          value={priceFilter}
          onChange={(e) => handleSlider(e.target.value)}
        />
      </div>
      <div className="categoriesFilter">
        <p>
          <strong>Category</strong>
        </p>
        {categories.map((category, idx) => {
          return (
            <div className="singleCategory">
              <input
                type="checkbox"
                id={`category-${idx}`}
                value={category.categoryName}
                selected={category.isSelected}
                onClick={() => handleCategory(category._id)}
              />
              <label htmlFor={`category-${idx}`}>{category.categoryName}</label>
            </div>
          );
        })}
      </div>
      <div className="ratingsFilter">
        <p>
          <strong>Rating</strong>
        </p>
        {ratings.map((rating, idx) => {
          return (
            <div className="singleRating">
              <input
                type="radio"
                id={`rating-${idx}`}
                value={rating}
                checked={ratingFilter === rating}
                onClick={(e) => handleRating(e.target.value)}
              />
              <label htmlFor={`rating-${idx}`}>{rating}</label>
            </div>
          );
        })}
      </div>
      <div className="pricingSortFilter">
        <p>
          <strong>Sort by</strong>
        </p>
        <div className="sortByPrices">
          <input
            type="radio"
            id="ascendingOrder"
            value="ascending"
            checked={sortingOrder === "ascending"}
            onClick={(e) => handleSortingOrder(e.target.value)}
          />
          <label htmlFor="ascendingOrder">Price - Low to High</label>
        </div>
        <div className="sortByPrices">
          <input
            type="radio"
            id="descendingOrder"
            value="descending"
            checked={sortingOrder === "descending"}
            onClick={(e) => handleSortingOrder(e.target.value)}
          />
          <label htmlFor="descendingOrder">Price - High to Low</label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
