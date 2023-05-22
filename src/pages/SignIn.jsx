import React, { useContext, useState } from "react";
import { MdVisibility } from "react-icons/md";
import "../index.css";
import { AuthContext } from "../contexts/AuthContext";

function SignIn() {
  const {handleUserLogin} = useContext(AuthContext)
  
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
        <button onClick={() => handleUserLogin(email, password)}>Sign In</button> &nbsp;
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