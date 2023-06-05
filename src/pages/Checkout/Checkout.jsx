import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./Checkout.css";

function Checkout() {
  const { address } = useContext(AuthContext);
  const { cart } = useContext(ProductsContext);
  const noOfItemsInCart = cart.length;

  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState(address[0]?._id);

  const addressToShow = address.find(({_id}) => _id === selectedAddress)

  useEffect(() => {
    setTotalPrice(
      [...cart].reduce(
        (total, product) => total + product.qty * product.price,
        0
      )
    );
  }, [cart]);

  const handleAddressSelect = (e) => {
    setSelectedAddress(e.target.id);
  };

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
            {cart.map((item) => {
              return (
                <div className="singleItemOrdered">
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
            <div className="totalAmountCheckout">
              <p>
                <strong>Total Amount</strong>
              </p>
              <p>
                <strong>900</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="deliveryDetails">
          <h3>Deliver to</h3>
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
        </div>
        <button className="placeOrder">Place Order</button>
      </section>
    </main>
  );
}

export default Checkout;
