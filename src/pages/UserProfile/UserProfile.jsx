import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./UserProfile.css";

function UserProfile() {
  const { user, handleUserLogout } = useContext(AuthContext);

  const [activeSection, setActiveSection] = useState("profile");

  const sections = ["Profile", "Address"];

  const handleSectionChange = (e) => {
    setActiveSection(e.target.getAttribute("value"));
  };

  return (
    <main>
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
                <p>{user?.name || user?.firstName + " " + user?.lastName}</p>
              </div>
              <div className="emailContainer">
                <p>Email</p>
                <p>{user?.email}</p>
              </div>
            </div>
            <button onClick={handleUserLogout}>Log Out</button>
          </div>
        ) : (
          <div className="userAddresses">Address Section</div>
        )}
      </div>
    </main>
  );
}

export default UserProfile;
