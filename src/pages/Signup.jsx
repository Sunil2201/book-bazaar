import React, { useContext, useState } from "react";
import { MdVisibility } from "react-icons/md";
import "../index.css";
import { AuthContext } from "../contexts/AuthContext";

function Signup() {
  const { setIsAuthenticated } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSignup = async () => {
    const response = await fetch("/api/auth/signup", {
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
    }
  };

  return (
    <div className="pageContainer">
      <header>
        <h1 className="pageHeader">Welcome!</h1>
      </header>
      <main>
        <form>
          <input
            type="text"
            className="nameInput"
            placeholder="Name"
            id="name"
            value={name}
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
        </form>
        <button onClick={handleSignup}>Sign up</button>
        <div className="otherMethodOfAuth">
          <h3>Already have an account?</h3>
          <p>Sign In</p>
        </div>
      </main>
    </div>
  );
}

export default Signup;
