import React, { useContext, useState } from "react";
import { MdVisibility } from "react-icons/md";
import "../index.css";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { handleUserSignup } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { firstName, lastName, email, password, confirmPassword } = formData;

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const navigateToSignIn = () => {
    navigate("/signin")
  }

  return (
    <div className="pageContainer">
      <header>
        <h2 className="pageHeader">Welcome!</h2>
      </header>
      <main className="signupPageContainer">
        <form>
          <input
            type="text"
            className="nameInput"
            placeholder="First Name"
            id="firstName"
            value={firstName}
            onChange={onChange}
          />

          <input
            type="text"
            className="nameInput"
            placeholder="Last Name"
            id="lastName"
            value={lastName}
            onChange={onChange}
          />

          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              value={password}
              onChange={onChange}
              id="password"
            />
            <MdVisibility
              size={25}
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <div className="passwordInputDiv">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={onChange}
              id="confirmPassword"
            />
            <MdVisibility
              size={25}
              className="showPassword"
              onClick={() => setShowConfirmPassword((prevState) => !prevState)}
            />
          </div>
        </form>
        <button onClick={() => handleUserSignup(firstName + " " + lastName, email, password)}>
          Sign up
        </button>
        <div className="otherMethodOfAuth">
          <h3>Already have an account?</h3>
          <p onClick={navigateToSignIn}>Sign In</p>
        </div>
      </main>
    </div>
  );
}

export default Signup;
