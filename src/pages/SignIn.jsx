import React, { useContext, useEffect, useState } from "react";
import { MdVisibility } from "react-icons/md";
import "../index.css";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const {handleUserLogin} = useContext(AuthContext)
  const navigate = useNavigate()
 
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const enterTestCredentials = () => {
    setFormData({
      email: "ballanisunil123@gmail.com",
      password: "sunil123"
    })
  }

  const navigateToSignup = () => {
    navigate("/signup")
  }

  return (
    <div className="pageContainer loginPageContainer">
      <header>
        <h2 className="pageHeader">Welcome Back!</h2>
      </header>
      <main className="profileForm">
        <form>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            value={email}
            onChange={onChange}
            id="email"
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
        </form>
        <div className="buttonContainer">
          <button onClick={() => handleUserLogin(email, password)}>Sign In</button> &nbsp;
          <button onClick={enterTestCredentials}>Test user</button>
        </div>
        <div className="otherMethodOfAuth">
          <h3>Don't have an account?</h3>
          <p onClick={navigateToSignup}>Sign Up Instead</p>
        </div>
      </main>
    </div>
  );
}

export default SignIn;
