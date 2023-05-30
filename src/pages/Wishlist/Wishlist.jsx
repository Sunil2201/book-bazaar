import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./Wishlist.css"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Rating from "../../components/Rating/Rating";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const{addToWishlistHandler, wishList, moveProductsFromWishlistToCart} = useContext(ProductsContext)
  const navigate = useNavigate();
  
  const goToCart = () => {
    navigate("/cart")
  }

  return( 
    <div className="wishlistPageContainer">
      <h2>My Wishlist</h2>
      <div className="wishlistItemsContainer">
        {wishList.map((product, idx) => {
          return(
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
                  Already in cart
                </button>
              ) : (
                <button
                  className="addToCartBtn"
                  onClick={() => moveProductsFromWishlistToCart(product, product._id)}
                >
                  Move to cart
                </button>
              )}
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default Wishlist;
