import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { selectedAddress, cart, handleAddressSelect, handlePlaceOrder } =
    useContext(ProductsContext);
  const { address } = useContext(AuthContext);
  const navigate = useNavigate()

  const [totalPrice, setTotalPrice] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [totalNoOfProductsInCart, setTotalNoOfProductsInCart] = useState(0);
  const [addressToShow, setAddressToShow] = useState();

  const calculateDiscountAmount = (discountRate, originalPrice) => {
    const discountPercentage = discountRate / 100;
    const discountAmount = originalPrice * discountPercentage;

    return Math.floor(discountAmount);
  };

  useEffect(() => {
    setAddressToShow(address.find(({ _id }) => _id === selectedAddress));
  }, [selectedAddress, address]);

  useEffect(() => {
    setTotalPrice(
      [...cart].reduce(
        (total, product) => total + product.qty * product.price,
        0
      )
    );

    setDiscountAmount(
      [...cart].reduce(
        (total, product) =>
          total +
          product.qty *
            calculateDiscountAmount(product.discountPercent, product.price),
        0
      )
    );

    setTotalNoOfProductsInCart(
      [...cart].reduce((acc, curr) => acc + curr.qty, 0)
    );
  }, [cart]);

  const navigateToProfile = () => {
    navigate("/profile")
  }

  return (
    <main className="checkoutPage">
      <section className="addressSelectContainer">
        <h2>Select an address</h2>
        <div className="addressContainer">
          {address.map((singleAddress, idx) => {
            return (
              <div
                className={
                  selectedAddress === singleAddress?._id
                    ? "selectedSingleAddressCard"
                    : "singleAddressCard"
                }
                id={singleAddress?._id}
                key={idx}
                onClick={(e) => handleAddressSelect(e)}
              >
                <p>
                  <strong>{singleAddress?.name}</strong>
                </p>
                <p>{singleAddress?.street}</p>
                <p>
                  {singleAddress?.city}, {singleAddress?.state}{" "}
                  {singleAddress?.zipCode}
                </p>
                <p>{singleAddress?.country}</p>
                <p>Phone Number: {singleAddress?.mobile}</p>
              </div>
            );
          })}
        </div>
        <button onClick={navigateToProfile} className="addNewAddress">Add an Address</button>
      </section>
      <section className="checkoutCard">
        <div className="orderDetails">
          <h3>Order Details</h3>
          <div className="orderDetailsHeader">
            <p>
              <strong>Item</strong>
            </p>
            <p>
              <strong>Quantity</strong>
            </p>
          </div>
          <div className="itemsOrdered">
            {cart.map((item, idx) => {
              return (
                <div className="singleItemOrdered" key={idx}>
                  <p>{item.title}</p>
                  <p>{item.qty}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="priceDetails">
          <h3>Price Details</h3>
          <div className="priceBreakdownCheckout">
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
            <div className="totalAmountCheckout">
              <p>
                <strong>Total Amount</strong>
              </p>
              <p>
                <strong>{totalPrice - discountAmount}</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="deliveryDetails">
          <h3>Deliver to</h3>
          {addressToShow ? (
            <div className="addressCard">
              <p>
                <strong>{addressToShow?.name}</strong>
              </p>
              <p>{addressToShow?.street}</p>
              <p>
                {addressToShow?.city}, {addressToShow?.state}{" "}
                {addressToShow?.zipCode}
              </p>
              <p>{addressToShow?.country}</p>
              <p>Phone Number: {addressToShow?.mobile}</p>
            </div>
          ) : (
            <p>No address selected</p>
          )}
        </div>
        <button className="placeOrder" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </section>
    </main>
  );
}

export default Checkout;
