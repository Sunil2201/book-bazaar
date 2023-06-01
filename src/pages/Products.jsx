import React, { useContext, useEffect } from "react";
import "../index.css";
import { ProductsContext } from "../contexts/ProductsContext";
import Filters from "../components/Filters/Filters";
import ProductCard from "../components/ProductCard/ProductCard";

function Products() {
  const {
    products,
    priceFilter,
    selectedCategories,
    ratingFilter,
    sortingOrder,
    setPageUrl
  } = useContext(ProductsContext);

  const normalizedRating = parseInt(ratingFilter.split(" ")[0], 10);

  useEffect(() => {
    setPageUrl(window.location.href)
  }, [])

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
                ({ rating, price }) =>
                  rating >= normalizedRating &&
                  price <= parseInt(priceFilter, 10)
              )
            : ratingFilter !== ""
            ? acc.filter(
                ({ rating, price }) =>
                  rating >= normalizedRating &&
                  price <= parseInt(priceFilter, 10)
              )
            : sortingOrder !== ""
            ? [...getSortedProducts(acc)].filter(
                ({ price }) => price <= parseInt(priceFilter, 10)
              )
            : acc.filter(({ price }) => price <= parseInt(priceFilter, 10));
        }, [])
      : ratingFilter !== "" && sortingOrder !== ""
      ? [
          ...getSortedProducts(
            products.filter(
              ({ rating, price }) =>
                rating >= normalizedRating && price <= parseInt(priceFilter, 10)
            )
          ),
        ]
      : ratingFilter !== ""
      ? products.filter(
          ({ rating, price }) =>
            rating >= normalizedRating && price <= parseInt(priceFilter, 10)
        )
      : sortingOrder !== ""
      ? [...getSortedProducts(products)].filter(
          ({ price }) => price <= parseInt(priceFilter, 10)
        )
      : products.filter(({ price }) => price <= parseInt(priceFilter, 10));

  return (
    <div className="productPage">
      <Filters />
      <div className="productContainer">
        <h3>Showing All Books</h3>
        <div className="allProducts">
          {modifiedProducts.map((product, idx) => {
            return (
              <ProductCard product={product} key={idx} parent={"Products"}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
