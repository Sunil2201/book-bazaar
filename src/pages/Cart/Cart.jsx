import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./Cart.css";
import "../../components/ProductCard/ProductCard.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, getCartProducts } = useContext(ProductsContext);
  const noOfItemsInCart = cart.length;
  const [totalNoOfProductsInCart, setTotalNoOfProductsInCart] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0)
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  const calculateDiscountAmount = (discountRate, originalPrice) => {
    const discountPercentage = discountRate / 100;
    const discountAmount = originalPrice * discountPercentage;

    return Math.floor(discountAmount);
  }; 

  useEffect(() => {
    setTotalPrice(
      [...cart].reduce(
        (total, product) => total + product.qty * product.price,
        0
      )
    );
    setDiscountAmount(
      [...cart].reduce(
        (total, product) => total + product.qty * calculateDiscountAmount(product.discountPercent, product.price),
        0
      )
    )
    setTotalNoOfProductsInCart([...cart].reduce((acc, curr) => acc + curr.qty, 0))
  }, [cart]);

  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <>
      {noOfItemsInCart === 0 ? (
        <div className="emptyCart">
          <h1>Your Cart is Empty!🙁</h1>
          <p>Start exploring our amazing collection of books to find your next reading adventure.</p>
          <button onClick={() => navigate("/products")}>Explore Books</button>
        </div>
      ) : (
        <div className="cartPageContainer">
          <h2>My Cart ({noOfItemsInCart})</h2>
          <div className="cartContainer">
            <div className="cartItems">
              {cart.map((product, idx) => {
                return (
                  <ProductCard product={product} key={idx} parent={"Cart"} />
                );
              })}
            </div>
            <div className="priceDetailsCard">
              <h2 className="cardHeading">Price Details</h2>
              <div className="priceBreakdown">
                <div className="individualPrice">
                  <p>Price ({totalNoOfProductsInCart} item/s)</p>
                  <p>{totalPrice}</p>
                </div>
                <div className="individualPrice">
                  <p>Discount</p>
                  <p>{discountAmount}</p>
                </div>
                <div className="individualPrice">
                  <p>Delivery Charges</p>
                  <p>FREE</p>
                </div>
              </div>
              <div className="totalAmount">
                <h2>Total Amount</h2>
                <h2>{totalPrice - discountAmount}</h2>
              </div>
              <p className="amountSavedSummary">
                You will save {discountAmount} on this order
              </p>
              <button onClick={goToCheckout}>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
