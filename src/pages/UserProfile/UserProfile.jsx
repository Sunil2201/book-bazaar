import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./UserProfile.css";
import { ProductsContext } from "../../contexts/ProductsContext";

function UserProfile() {
  const {
    user,
    address,
    addNewAddressToList,
    editExistingAddress,
    deleteAddressFromList
  } = useContext(AuthContext);
  const {handleUserLogout} = useContext(ProductsContext)

  const [activeSection, setActiveSection] = useState("profile");
  const [addNewAddress, setAddNewAddress] = useState(false);
  const [editAddressMode, setEditAddressMode] = useState(false);
  const [enteredAddress, setEnteredAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  });

  const { name, street, city, state, country, zipCode, mobile } =
    enteredAddress;

  const sections = ["Profile", "Address"];

  const handleSectionChange = (e) => {
    setActiveSection(e.target.getAttribute("value"));
  };

  const handleAddNewAddress = () => {
    setAddNewAddress(true);
  };

  const goBackToProfileSection = () => {
    setAddNewAddress(false);
  };

  const handleChange = (e) => {
    setEnteredAddress((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const addDummyValues = () => {
    setEnteredAddress({
      name: "Admin",
      street: "1306, 10th main road, Jeevan Bima Nagar",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      zipCode: "560008",
      mobile: "7795255555",
    });
  };

  const saveNewAddress = () => {
    addNewAddressToList(enteredAddress);
    setAddNewAddress(false);
    setEnteredAddress({
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      mobile: "",
    });
  };

  const handleEditAddress = (addressToEdit) => {
    setEditAddressMode(true);
    setAddNewAddress(true);
    setEnteredAddress(addressToEdit);
  };

  const confirmEditedAddress = () => {
    editExistingAddress(enteredAddress, enteredAddress?._id);
    setAddNewAddress(false);
    setEditAddressMode(false);
    setEnteredAddress({
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      mobile: "",
    });
  };

  return (
    <main>
      {!addNewAddress ? (
        <>
          <h2>Account Details</h2>
          <div className="mainContainer">
            <div className="sections">
              {sections.map((section) => {
                return (
                  <p
                    className={
                      activeSection === section.toLowerCase()
                        ? "selectedSection"
                        : "section"
                    }
                    onClick={handleSectionChange}
                    value={section.toLowerCase()}
                  >
                    {section}
                  </p>
                );
              })}
            </div>
            {activeSection === "profile" ? (
              <div className="userDetails">
                <h3>Profile Details</h3>
                <div className="userDetailsContent">
                  <div className="nameContainer">
                    <p>Full Name</p>
                    <p>
                      {user?.name || user?.firstName + " " + user?.lastName}
                    </p>
                  </div>
                  <div className="emailContainer">
                    <p>Email</p>
                    <p>{user?.email}</p>
                  </div>
                </div>
                <button onClick={handleUserLogout}>Log Out</button>
              </div>
            ) : (
              <div className="userAddresses">
                <h3>My Adresses</h3>
                <div className="existingAddresses">
                  {address?.length === 0 || address === null ? <p>No address added</p> :
                    address.map((singleAddress) => {
                      return (
                        <div className="singleAddress">
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
                          <div className="addressActionButtons">
                            <button
                              onClick={() => handleEditAddress(singleAddress)}
                            >
                              Edit
                            </button>
                            <button onClick={() => deleteAddressFromList(singleAddress?._id)}>Delete</button>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <button
                  onClick={() => handleAddNewAddress(address)}
                  className="addNewAddress"
                >
                  + Add New Address
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="addNewAddressSection">
          <h3>Add New Address</h3>
          <input
            type="text"
            value={name}
            id="name"
            placeholder="Enter name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={street}
            id="street"
            placeholder="Enter house no., road, colony"
            onChange={handleChange}
          />
          <input type="text" value={city} id="city" placeholder="Enter city" />
          <input
            type="text"
            value={state}
            id="state"
            placeholder="Enter state"
            onChange={handleChange}
          />
          <input
            type="text"
            value={country}
            id="country"
            placeholder="Enter country"
            onChange={handleChange}
          />
          <input
            type="text"
            value={zipCode}
            id="zipCode"
            placeholder="Enter postal code"
            onChange={handleChange}
          />
          <input
            type="text"
            value={mobile}
            id="mobile"
            placeholder="Enter mobile number"
            onChange={handleChange}
          />
          <div className="actionBtn">
            <button
              onClick={
                !editAddressMode
                  ? () => saveNewAddress()
                  : () => confirmEditedAddress()
              }
            >
              Save
            </button>
            <button onClick={goBackToProfileSection}>Cancel</button>
            <button onClick={addDummyValues}>Fill with dummy values</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default UserProfile;
