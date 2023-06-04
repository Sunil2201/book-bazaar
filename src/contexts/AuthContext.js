import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const tokenFromLocalStorage = JSON.parse(localStorage.getItem("auth"));
  const [token, setToken] = useState(tokenFromLocalStorage?.token);
  const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(userFromLocalStorage?.user);
  const userAddressFromLocalStorage = JSON.parse(
    localStorage.getItem("address")
  );
  const [address, setAddress] = useState(userAddressFromLocalStorage);
  const navigate = useNavigate();
  const location = useLocation();

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

  const getUserAddress = async () => {
    if (token) {
      try {
        const res = await fetch("/api/user/address", {
          headers: {
            "Content-Type": "application/json",
            authorization: token
          },
        });
        const resJson = await res?.json();
        if(res.status === 200){
          localStorage.setItem("address", JSON.stringify(resJson?.address));
          setAddress(resJson?.address)
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const addNewAddressToList = async(address) => {
    if(token){
      try {
        const res = await fetch("api/user/address", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
          body: JSON.stringify({address})
        })
        const {address: addressList} = await res.json()
        setAddress(addressList)
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  const editExistingAddress = async(address, addressId) => {
    if(token){
      try {
        const res = await fetch(`api/user/address/${addressId}`, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
          body: JSON.stringify({address})
        })
        const {address: addressList} = await res.json()
        setAddress(addressList)
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  const deleteAddressFromList = async(addressId) => {
    if(token){
      try {
        const res = await fetch(`api/user/address/${addressId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: token,
          },
        })
        const {address: addressList} = await res.json()
        setAddress(addressList)
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    getUserAddress()
  }, [])

  const handleUserLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    setToken("");
    setUser({});
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        address,
        handleUserLogin,
        handleUserSignup,
        handleUserLogout,
        addNewAddressToList,
        editExistingAddress,
        deleteAddressFromList
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
