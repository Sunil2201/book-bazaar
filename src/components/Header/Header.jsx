import React, { useContext, useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import { AuthContext } from "../../contexts/AuthContext";

function Header() {
  const { token } = useContext(AuthContext);
  const { handleUserLogout, wishList, cart } = useContext(ProductsContext);
  const { pageUrl, toggleFilterContainer, searchedKeyword, searchForProducts } =
    useContext(ProductsContext);
  const [totalNoOfProductsInCart, setTotalNoOfProductsInCart] = useState(0)

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/signin");
  };

  useEffect(() => {
    setTotalNoOfProductsInCart([...cart].reduce((acc, curr) => acc + curr.qty, 0))
  }, [cart])


  return (
    <div className="headerContainer">
      <div className="navContainer">
        <NavLink to="/">
          <div className="appTitle">
            <ImBooks size={25} color="#0B7C6B" />
            <h2>Book Bazaar</h2>
          </div>
        </NavLink>

        <div className="searchContainer">
          <BiSearch className="searchIcon" />
          <input
            type="text"
            value={searchedKeyword}
            onChange={searchForProducts}
            id=""
            placeholder="Search Products..."
          />
        </div>

        <div className="headerActions">
          <button
            onClick={token ? () => handleUserLogout() : () => goToLogin()}
          >
            {token ? "Logout" : "Login"}
          </button>
          <NavLink className="navBtn" to="/wishlist">
            <AiOutlineHeart color="#000" size={25} />
            {wishList.length > 0 && <span className="navBtnQty">{wishList.length}</span>}
          </NavLink>
          <NavLink className="navBtn" to="/cart">
            <AiOutlineShoppingCart color="#000" size={25} />
            {totalNoOfProductsInCart > 0 && <span className="navBtnQty">{totalNoOfProductsInCart}</span>}
          </NavLink>
          <NavLink to="/profile">
            <AiOutlineUser color="#000" size={25}></AiOutlineUser>
          </NavLink>
        </div>
      </div>

      <div className="searchContainer searchForSmallerScreens">
        <BiSearch className="searchIcon" />
        <input
          type="text"
          value={searchedKeyword}
          onChange={searchForProducts}
          id=""
          placeholder="Search Products..."
        />
      </div>
    </div>
  );
}

export default Header;
