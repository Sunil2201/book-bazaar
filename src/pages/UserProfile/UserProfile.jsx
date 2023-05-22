import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function UserProfile() {
  const { user, handleUserLogout } = useContext(AuthContext);
  return (
    <div>
      <h3>Account Details</h3>
      <div>
        <p>Full Name:{user?.name || user?.firstName + " " + user?.lastName}</p>
        <p>Email: {user?.email}</p>
      </div>
      <button onClick={handleUserLogout}>Log Out</button>
    </div>
  );
}

export default UserProfile;
