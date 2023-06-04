import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Checkout.css"

function Checkout() {
  const { address } = useContext(AuthContext);

  const [selectedAddress, setSelectedAddress] = useState((address[0])?._id)

  const handleAddressSelect = (e) => {
    setSelectedAddress(e.target.id)
  }

  console.log(selectedAddress);

  return (
    <main className="checkoutPage">
      <section className="addressSelectContainer">
        <h2>Select an address</h2>
        <div className="addressContainer">
          {address.map((singleAddress, idx) => {
            return (
              <div className={selectedAddress === singleAddress?._id ? "selectedSingleAddressCard" : "singleAddressCard"} id={singleAddress?._id} key={idx} onClick={(e) => handleAddressSelect(e)}>
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
          <h3>This is checkout card</h3>
      </section>
    </main>
  );
}

export default Checkout;
