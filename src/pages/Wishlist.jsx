import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

function Wishlist() {
  const{wishList} = useContext(ProductsContext)
  console.log(wishList);
  return <div>Wishlist</div>;
}

export default Wishlist;
