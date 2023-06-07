import React, { useContext } from "react";
import "../index.css";
import { ProductsContext } from "../contexts/ProductsContext";
import Filters from "../components/Filters/Filters";
import ProductCard from "../components/ProductCard/ProductCard";
import Spinner from "../components/Spinner";
import { BiFilter } from "react-icons/bi";

function Products() {
  const {
    products,
    priceFilter,
    selectedCategories,
    ratingFilter,
    sortingOrder,
    loading,
    toggleFilterContainer,
  } = useContext(ProductsContext);

  const normalizedRating = parseInt(ratingFilter.split(" ")[0], 10);

  const getSortedProducts = (arrToSort) => {
    const sortedProducts =
      sortingOrder === "ascending"
        ? [...arrToSort].sort(
            (a, b) => parseInt(a.price, 10) - parseInt(b.price, 10)
          )
        : [...arrToSort].sort(
            (a, b) => parseInt(b.price, 10) - parseInt(a.price, 10)
          );
    return sortedProducts;
  };

  const calculateDiscountedPrice = (discountRate, originalPrice) => {
    const discountPercentage = discountRate / 100;
    const discountAmount = originalPrice * discountPercentage;
    const discountedPrice = originalPrice - discountAmount;

    return Math.round(discountedPrice);
  };

  const modifiedProducts =
    selectedCategories.length > 0
      ? products.reduce((acc, curr) => {
          if (
            curr.categoryName ===
            selectedCategories.find(
              (category) => category === curr.categoryName
            )
          ) {
            acc.push(curr);
          }
          return ratingFilter !== "" && sortingOrder !== ""
            ? [...getSortedProducts(acc)].filter(
                ({ rating, price, discountPercent }) =>
                  rating >= normalizedRating &&
                  calculateDiscountedPrice(discountPercent ,price) <= parseInt(priceFilter, 10)
              )
            : ratingFilter !== ""
            ? acc.filter(
                ({ rating, price, discountPercent }) =>
                  rating >= normalizedRating &&
                  calculateDiscountedPrice(discountPercent, price) <= parseInt(priceFilter, 10)
              )
            : sortingOrder !== ""
            ? [...getSortedProducts(acc)].filter(
                ({ price, discountPercent}) => calculateDiscountedPrice(discountPercent, price) <= parseInt(priceFilter, 10)
              )
            : acc.filter(({ price, discountPercent }) => calculateDiscountedPrice(discountPercent, price) <= parseInt(priceFilter, 10));
        }, [])
      : ratingFilter !== "" && sortingOrder !== ""
      ? [
          ...getSortedProducts(
            products.filter(
              ({ rating, price, discountPercent}) =>
                rating >= normalizedRating && calculateDiscountedPrice(discountPercent, price) <= parseInt(priceFilter, 10)
            )
          ),
        ]
      : ratingFilter !== ""
      ? products.filter(
          ({ rating, price, discountPercent }) =>
            rating >= normalizedRating && calculateDiscountedPrice(discountPercent, price) <= parseInt(priceFilter, 10)
        )
      : sortingOrder !== ""
      ? [...getSortedProducts(products)].filter(
          ({ price, discountPercent}) => calculateDiscountedPrice(discountPercent, price) <= parseInt(priceFilter, 10)
        )
      : products.filter(({ price, discountPercent }) => calculateDiscountedPrice(discountPercent, price) <= parseInt(priceFilter, 10));

  const noOfBooksDisplayed = modifiedProducts.length;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="productPage">
      <Filters />
      <div className="productContainer">
        <div className="filterDiv">
          <h3>Showing All Books ({noOfBooksDisplayed})</h3>
          <BiFilter
            size={30}
            className="burger"
            onClick={toggleFilterContainer}
          ></BiFilter>
        </div>
        <div className="allProducts">
          {modifiedProducts.map((product, idx) => {
            return (
              <ProductCard product={product} key={idx} parent={"Products"} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
