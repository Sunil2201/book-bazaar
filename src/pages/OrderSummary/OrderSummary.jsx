import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./OrderSummary.css";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const { orderDetails } = useContext(ProductsContext);
  const navigate = useNavigate()

  const calculateDiscountedPrice = (discountRate, originalPrice) => {
    const discountPercentage = discountRate / 100;
    const discountAmount = originalPrice * discountPercentage;
    const discountedPrice = originalPrice - discountAmount;

    return Math.round(discountedPrice);
  };

  return (
    <>
      {orderDetails?.orderedProducts.length === 0 ? (
        <div className="orderSummaryEmpty">
          <h3>Unfortunately, your order is empty!☹️</h3>
          <p>To start shopping, please browse our wide range of products and add items to your cart.</p>
          <button onClick={() => navigate("/products")}>Buy Books</button>
        </div>
      ) : (
        <main className="orderSummaryPage">
          <h2>Order Summary</h2>
          <section className="orderSummaryContainer">
            <h3>Order Confirmed</h3>
            <div className="orderDetails">
              <p>
                <strong>Order Id:</strong> {orderDetails?.orderId}
              </p>
              <p>
                <strong>Total Payment:</strong> {orderDetails?.totalAmount}
              </p>
              <div className="addressDetails">
                <p>
                  <strong>Order will be delivered to:</strong>
                </p>
                <div className="addressCard">
                  <p>
                    <strong>{orderDetails?.orderAddress?.name}</strong>
                  </p>
                  <p>{orderDetails?.orderAddress?.street}</p>
                  <p>
                    {orderDetails?.orderAddress?.city},{" "}
                    {orderDetails?.orderAddress?.state}
                    {orderDetails?.orderAddress?.zipCode}
                  </p>
                  <p>{orderDetails?.orderAddress?.country}</p>
                  <p>Phone Number: {orderDetails?.orderAddress?.mobile}</p>
                </div>
                <div className="orderedItems">
                  {orderDetails?.orderedProducts.map((order, idx) => {
                    return (
                      <div className="individualProductOrdered" key={idx}>
                        <img src={order.img} alt="" />
                        <div className="productDetails">
                          <p>{order.author}</p>
                          <h3>{order.title}</h3>
                          <p>Total Quantity: {order.qty}</p>
                          {order.discountPercent > 0 ? (
                            <div className="pricingDivOrderPage">
                              <p className="productFinalPrice">{`Rs ${calculateDiscountedPrice(
                                order.discountPercent,
                                order.price
                              )}`}</p>
                              <p className="productOriginalPrice">{`Rs ${order.price}`}</p>
                              <p className="productDiscount">
                                {" "}
                                {`(${order.discountPercent}% OFF)`}
                              </p>
                            </div>
                          ) : (
                            <p className="productPrice">{`Rs ${order.price}`}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default OrderSummary;
