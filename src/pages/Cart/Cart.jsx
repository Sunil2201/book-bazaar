import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./Cart.css"
import "../../components/ProductCard/ProductCard.css"
import ProductCard from "../../components/ProductCard/ProductCard";

function Cart() {
  const { cart } = useContext(ProductsContext);
  const noOfItemsInCart = cart.length;
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setTotalPrice([...cart].reduce((total, product) => total + product.price, 0))
  }, [cart])


  return (
    <div className="cartPageContainer">
      <h2>My Cart ({noOfItemsInCart})</h2>
      <div className="cartContainer">
        <div className="cartItems">
          {cart.map((product, idx) => {
            return(
              <ProductCard product={product} key={idx} parent={"Cart"}/>
            )
          })}
        </div>
        <div className="priceDetailsCard">
          <h3 className="cardHeading">Price Details</h3>
          <div className="priceBreakdown">
            <div className="individualPrice">
              <p>Price ({noOfItemsInCart} item/s)</p>
              <p>{totalPrice}</p>
            </div>
            <div className="individualPrice">
              <p>Discount</p>
              <p>100</p>
            </div>
            <div className="individualPrice">
              <p>Delivery Charges</p>
              <p>0</p>
            </div>
          </div>
          <div className="totalAmount">
            <h3>Total Amount</h3>
            <h3>900</h3>
          </div>
          <p className="amountSavedSummary">You will save 100 on this order</p>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
