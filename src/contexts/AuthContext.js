import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const tokenFromLocalStorage = JSON.parse(localStorage.getItem("auth"));
  const [token, setToken] = useState(tokenFromLocalStorage?.token);
  const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(userFromLocalStorage?.user);
  const navigate = useNavigate()
  const location = useLocation()

  const handleUserLogin = async (email, password) => {
    if (email !== "" && password !== "") {
      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const { foundUser, encodedToken } = await response.json();
        if (response.status === 200) {
          localStorage.setItem("auth", JSON.stringify({ token: encodedToken }));
          setToken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setUser(foundUser);
          navigate(location?.state?.from?.pathname);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Please enter email and password");
    }
  };

  const handleUserSignup = async (name, email, password) => {
    if (name !== "" && email !== "" && password !== "") {
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        });
        const { createdUser, encodedToken } = await response.json();
        if (response.status === 201) {
          localStorage.setItem("auth", JSON.stringify({ token: encodedToken }));
          setToken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: createdUser }));
          setUser(createdUser);
          navigate(location?.state?.from?.pathname);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Please enter all the details");
    }
  };

  const handleUserLogout = () => {
    localStorage.removeItem("auth")
    localStorage.removeItem("user")
    setToken("")
    setUser({})
    navigate("/")
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        handleUserLogin,
        handleUserSignup,
        handleUserLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
