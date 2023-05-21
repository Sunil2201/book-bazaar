import React, { useContext } from "react";
import "../index.css";
import { ProductsContext } from "../contexts/ProductsContext";
import Filters from "../components/Filters";

function Products() {
  const {
    products,
    priceFilter,
    selectedCategories,
    ratingFilter,
    sortingOrder,
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
          {modifiedProducts.map((product) => {
            return (
              <div className="individualProduct">
                <img src={product.img} alt="book-img" />
                <h3>{product.title}</h3>
                <p>{product.author}</p>
                <p>{`Rs ${product.price}`}</p>
                <button>Add to cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
