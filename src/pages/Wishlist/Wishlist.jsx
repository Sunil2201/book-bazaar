import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./Wishlist.css";
import "../../components/ProductCard/ProductCard.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const { wishList, getWishlistProducts } = useContext(ProductsContext);
  const navigate = useNavigate()
  const noOfItemsInWishlist = wishList.length;

  useEffect(() => {
    getWishlistProducts();
  }, []);

  return (
    <>
      {noOfItemsInWishlist === 0 ? (
        <div className="emptyWishlist">
          <h1>Your Wishlist is Empty!🙁</h1>
          <p>Start exploring some books and add your favourites to Wishlist.</p>
          <button onClick={() => navigate("/products")}>Explore Books</button>
        </div>
      ) : (
        <div className="wishlistPageContainer">
          <h2>My Wishlist ({noOfItemsInWishlist})</h2>
          <div className="wishlistItemsContainer">
            {wishList.map((product, idx) => {
              return (
                <ProductCard product={product} key={idx} parent={"Wishlist"} />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Wishlist;
