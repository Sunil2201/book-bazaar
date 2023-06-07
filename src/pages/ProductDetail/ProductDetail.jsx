import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./ProductDetail.css";
import Rating from "../../components/Rating/Rating";
import Spinner from "../../components/Spinner";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const {
    fetchProductDetails,
    productDetails,
    addToWishlistHandler,
    addToCartHandler,
    productLoading,
    setProductLoading,
  } = useContext(ProductsContext);

  const [selectedFormat, setSelectedFormat] = useState("audio");

  const formats = ["audio", "ebook", "hardcover", "paperback"];

  const changeFormat = (e) => {
    setSelectedFormat(e.target.getAttribute("value"));
  };

  useEffect(() => {
    fetchProductDetails(productId);
    setProductLoading(true);
  }, [fetchProductDetails, productId, setProductLoading]);

  const goToWishlist = () => {
    navigate("/wishlist");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const calculateDiscountedPrice = (discountRate, originalPrice) => {
    const discountPercentage = discountRate / 100;
    const discountAmount = originalPrice * discountPercentage;
    const discountedPrice = originalPrice - discountAmount;

    return Math.round(discountedPrice);
  };

  if (productLoading) {
    return <Spinner />;
  }

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
              {productDetails?.isOutOfStock ? <p className="outOfStockProductDetail">Out of stock</p> : <p className="normalLabel">In Stock</p>}
              {productDetails.discountPercent > 0 && <p className="normalLabel">Discount</p>} 
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
              {formats.map((format, idx) => {
                return (
                  <p
                    className={
                      selectedFormat === format ? "selectedFormat" : "format"
                    }
                    onClick={changeFormat}
                    value={format}
                    key={idx}
                  >
                    {format}
                  </p>
                );
              })}
            </div>
            {productDetails.discountPercent > 0 ? (
              <div className="productPricingDiv">
                <p className="productFinalPrice">{`Rs ${calculateDiscountedPrice(
                  productDetails.discountPercent,
                  productDetails.price
                )}`}</p>
                <p className="productOriginalPrice">{`Rs ${productDetails.price}`}</p>
                <p className="productDiscount">
                  {" "}
                  {`(${productDetails.discountPercent}% OFF)`}
                </p>
              </div>
            ) : (
              <p className="individualProductPrice">{`Rs ${productDetails.price}`}</p>
            )}
          </section>
          <section className="moreAboutBookSection">
            <div className="genresSection">
              <p className="label">Genres</p>
              <div className="genresContainer">
                {productDetails?.genres.length &&
                  productDetails?.genres.map((genre, idx) => {
                    return <p key={idx}>{genre}</p>;
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
