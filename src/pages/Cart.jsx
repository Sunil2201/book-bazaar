import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

function Cart() {

  const {cart} = useContext(ProductsContext)

  console.log(cart);

  return <div>Cart</div>;
}

export default Cart;
