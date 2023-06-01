import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./Wishlist.css";
import "../../components/ProductCard/ProductCard.css";
import ProductCard from "../../components/ProductCard/ProductCard";

function Wishlist() {
  const { wishList } =
    useContext(ProductsContext);

  return (
    <div className="wishlistPageContainer">
      <h2>My Wishlist</h2>
      <div className="wishlistItemsContainer">
        {wishList.map((product, idx) => {
          return (
            <ProductCard product={product} key={idx} parent={"Wishlist"}/>
          );
        })}
      </div>
    </div>
  );
}

export default Wishlist;
