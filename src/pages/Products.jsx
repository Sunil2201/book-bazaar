import React, { useContext, useEffect } from "react";
import "../index.css";
import { ProductsContext } from "../contexts/ProductsContext";
import Filters from "../components/Filters/Filters";
import Rating from "../components/Rating/Rating";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Products() {
  const {
    products,
    priceFilter,
    selectedCategories,
    ratingFilter,
    sortingOrder,
    isHovered,
    addToCartHandler,
    addToWishlistHandler,
    handleMouseEnter,
    handleMouseLeave,
    setPageUrl
  } = useContext(ProductsContext);

  const navigate = useNavigate()

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

  const goToCart = () => {
    navigate("/cart")
  }

  return (
    <div className="productPage">
      <Filters />
      <div className="productContainer">
        <h3>Showing All Books</h3>
        <div className="allProducts">
          {modifiedProducts.map((product, idx) => {
            return (
              <div className="individualProduct">
                <div className="productImageContainer">
                  <img src={product.img} alt="book-img" />
                  <div
                    className="addToWishlistIcon"
                    onClick={() => addToWishlistHandler(product, product._id)}
                    // onMouseEnter={
                    //   isHovered[idx] ? () => handleMouseEnter(product._id) : null
                    // }
                    // onMouseLeave={
                    //   isHovered[idx] ? () => handleMouseLeave(product._id) : null
                    // }
                  >
                    {product.isWishlisted ? (
                      <AiFillHeart fill="red" size={20} />
                    ) : (
                      <AiOutlineHeart size={20} />
                    )}
                  </div>
                </div>

                <div className="productDetails">
                  <p className="authorName">{product.author}</p>
                  <h3 className="bookTitle">{product.title}</h3>
                  <Rating rating={product.rating} />
                  <p className="productPrice">{`Rs ${product.price}`}</p>
                  {product.isPresentInCart ? (
                    <button className="addToCartBtn" onClick={goToCart}>
                      Go to cart
                    </button>
                  ) : (
                    <button
                      className="addToCartBtn"
                      onClick={() => addToCartHandler(product, product._id)}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
