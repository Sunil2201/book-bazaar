import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./ProductDetail.css";
import Rating from "../../components/Rating/Rating";

function ProductDetail() {
  const { productId } = useParams();
  const { fetchProductDetails, productDetails } = useContext(ProductsContext);

  const [selectedFormat, setSelectedFormat] = useState("audio");

  const formats = ["audio", "ebook", "hardcover", "paperback"];

  const changeFormat = (e) => {
    setSelectedFormat(e.target.getAttribute("value"));
  };

  useEffect(() => {
    fetchProductDetails(productId);
  }, []);

  return (
    <main className="individualProductPage">
      <h2>Product Details</h2>
      <div className="productDetailsContainer">
        <div className="imageContainer">
          <img src={productDetails?.product?.img} alt="book-img" />
        </div>
        <div className="individualProductDetails">
          <section className="topSection">
            <div className="productLabels">
              <p>In Stock</p>
              <p>Discount</p>
            </div>
            <h2>{productDetails?.product?.title}</h2>
            <div className="bookInfoDiv">
              <p>Author: {productDetails?.product?.author}</p>
              <Rating rating={productDetails?.product?.rating} />
            </div>
          </section>
          <section className="descriptionSection">
            <p>{productDetails?.product?.description?.para1}</p>
            {productDetails?.product?.description?.para2 && (
              <p>{productDetails?.product?.description?.para2}</p>
            )}
            {productDetails?.product?.description?.para3 && (
              <p>{productDetails?.product?.description?.para3}</p>
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
          </section>
          <section className="actionButtons">
            <button className="cartBtn">Add to Cart</button>
            <button className="wishlistBtn">Add to Wishlist</button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
