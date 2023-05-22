import React, { useContext, useState } from "react";
import { MdVisibility } from "react-icons/md";
import "../index.css";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function SignIn() {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
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

  const handleLogin = async () => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const modifiedResponse = await response.json();
    localStorage.setItem("token", modifiedResponse?.encodedToken);
    if(modifiedResponse?.encodedToken){
        setIsAuthenticated(true)
        navigate(location?.state?.from?.pathname || "/products")
    }
};

  return (
    <div className="pageContainer">
      <header>
        <h1 className="pageHeader">Welcome Back!</h1>
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
        <button onClick={handleLogin}>Sign In</button> &nbsp;
        <button>Test user</button>
        <div className="otherMethodOfAuth">
          <h3>Don't have an account?</h3>
          <p>Sign Up Instead</p>
        </div>
      </main>
    </div>
  );
}

export default SignIn;
