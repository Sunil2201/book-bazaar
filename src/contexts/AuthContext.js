import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductsContext } from "./ProductsContext";

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
          navigate(location?.state?.from?.pathname || "/");
          toast.success("Welcome back! You have successfully logged in.");
        }
      } catch (error) {
        console.error(error.message);
        toast.error("Login failed. Please check your credentials and try again.");
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
          setToken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: createdUser }));
          setUser(createdUser);
          setAddress(createdUser?.address)
          navigate(location?.state?.from?.pathname || "/");
          toast.success("Welcome to our application! Your account has been created successfully.");
        }
      } catch (error) {
        console.error(error.message);
        toast.error("Sign up failed. Please try again later.");
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
        toast.success("Address added successfully!")
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
        toast.success("Address updated successfully!");
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
        const {address: addressList} = await res.json();
        setAddress(addressList);
        toast.success("Address deleted successfully!");
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    getUserAddress()
  }, [token])

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        address,
        setToken,
        setUser,
        handleUserLogin,
        handleUserSignup,
        addNewAddressToList,
        editExistingAddress,
        deleteAddressFromList
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
