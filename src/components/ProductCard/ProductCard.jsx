import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Rating from "../Rating/Rating";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product, parent }) {
  const {
    addToWishlistHandler,
    addToCartHandler,
    moveProductsFromWishlistToCart,
    updateProductQuantityInCart,
    moveProductFromCartToWishlist,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  } = useContext(ProductsContext);

  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  const goToWishlist = () => {
    navigate("/wishlist");
  };

  const goToProductDetailPage = (productId) => {
    navigate(`/products/${productId}`);
  }

  return (
    <div
      className={
        parent === "Cart" ? "individualProductCart" : "individualProduct"
      }
      onClick={parent === "Products" && (() => goToProductDetailPage(product._id))}
    >
      <div className="productImageContainer">
        <img src={product.img} alt="book-img" />
        {parent !== "Cart" && (
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
        )}
      </div>

      <div
        className={parent === "Cart" ? "productDetailsCart" : "productDetails"}
      >
        <p className="authorName">{product.author}</p>
        <h3 className={parent === "Cart" ? "bookTitleCart" : "bookTitle"}>
          {product.title}
        </h3>
        {parent === "Products" && <Rating rating={product.rating} />}
        <p className="productPrice">{`Rs ${product.price}`}</p>
        {parent === "Cart" && (
          <div className="quantityIncrease">
            <span>Quantity: </span>
            <div className="quantityIncreaseContainer">
              <button
                disabled={product.qty === 1 ? true : false}
                onClick={() =>
                  updateProductQuantityInCart(product._id, "decrement")
                }
              >
                -
              </button>
              <input type="number" value={product.qty} />
              <button
                onClick={() =>
                  updateProductQuantityInCart(product._id, "increment")
                }
              >
                +
              </button>
            </div>
          </div>
        )}

        {parent === "Wishlist" || parent === "Products" ? (
          product.isPresentInCart ? (
            <button className="cartBtn" onClick={goToCart}>
              {parent === "Wishlist" ? "Already in cart" : "Go to cart"}
            </button>
          ) : (
            <button
              className="cartBtn"
              onClick={
                parent === "Wishlist"
                  ? () => moveProductsFromWishlistToCart(product, product._id)
                  : () => addToCartHandler(product, product._id)
              }
            >
              {parent === "Wishlist" ? "Move to cart" : "Add to cart"}
            </button>
          )
        ) : (
          <>
            <button
              className="cartBtn"
              onClick={() => addToCartHandler(product, product._id)}
            >
              Remove from Cart
            </button>{" "}
            <button
              className="wishlistBtn"
              onClick={
                product.isWishlisted
                  ? () => goToWishlist()
                  : () => moveProductFromCartToWishlist(product, product._id)
              }
            >
              {product.isWishlisted
                ? "Already in Wishlist"
                : "Move to Wishlist"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
