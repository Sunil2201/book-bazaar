import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./ProductDetail.css";
import Rating from "../../components/Rating/Rating";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const {
    fetchProductDetails,
    productDetails,
    addToWishlistHandler,
    addToCartHandler,
  } = useContext(ProductsContext);

  const [selectedFormat, setSelectedFormat] = useState("audio");

  const formats = ["audio", "ebook", "hardcover", "paperback"];

  const changeFormat = (e) => {
    setSelectedFormat(e.target.getAttribute("value"));
  };

  useEffect(() => {
    fetchProductDetails(productId);
  }, []);

  const goToWishlist = () => {
    navigate("/wishlist");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <main className="individualProductPage">
      <h2>Product Details</h2>
      <div className="productDetailsContainer">
        <div className="imageContainer">
          <img src={productDetails?.img} alt="book-img" />
        </div>
        <div className="individualProductDetails">
          <section className="topSection">
            <div className="productLabels">
              <p>In Stock</p>
              <p>Discount</p>
            </div>
            <h2>{productDetails?.title}</h2>
            <div className="bookInfoDiv">
              <p>Author: {productDetails?.author}</p>
              <Rating rating={productDetails?.rating} />
            </div>
          </section>
          <section className="descriptionSection">
            <p>{productDetails?.description?.para1}</p>
            {productDetails?.description?.para2 && (
              <p>{productDetails?.description?.para2}</p>
            )}
            {productDetails?.description?.para3 && (
              <p>{productDetails?.description?.para3}</p>
            )}
          </section>
          <section className="formatsSection">
            <p>
              <span>Select Format:</span> {selectedFormat}
            </p>
            <div className="formatsContainer">
              {formats.map((format) => {
                return (
                  <p
                    className={
                      selectedFormat === format ? "selectedFormat" : "format"
                    }
                    onClick={changeFormat}
                    value={format}
                  >
                    {format}
                  </p>
                );
              })}
            </div>
            <p className="individualProductPrice">Rs {productDetails?.price}</p>
          </section>
          <section className="moreAboutBookSection">
            <div className="genresSection">
              <p className="label">Genres</p>
              <div className="genresContainer">
                {productDetails?.genres.map((genre) => {
                  return <p>{genre}</p>;
                })}
              </div>
            </div>
            <p className="pagesSection">{productDetails?.noOfPages} pages </p>
          </section>
          <section className="actionButtons">
            <button
              className="cartBtn"
              onClick={
                productDetails?.isPresentInCart
                  ? () => goToCart()
                  : () => addToCartHandler(productDetails, productDetails?._id)
              }
            >
              {productDetails?.isPresentInCart ? "Go to Cart" : "Add to Cart"}
            </button>
            <button
              className="wishlistBtn"
              onClick={
                productDetails?.isWishlisted
                  ? () => goToWishlist()
                  : () =>
                      addToWishlistHandler(productDetails, productDetails?._id)
              }
            >
              {productDetails?.isWishlisted
                ? "Go to Wishlist"
                : "Add to Wishlist"}
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
