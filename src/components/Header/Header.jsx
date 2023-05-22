import React from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
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
          <input type="text" id="" placeholder="Search Products..." />
        </div>

        <div className="headerActions">
          <button>Login</button>
          <NavLink to="/wishlist">
            <AiOutlineHeart color="#000" size={25} />
          </NavLink>
          <NavLink to="/cart">
            <AiOutlineShoppingCart color="#000" size={25} />
          </NavLink>
          <NavLink to="/profile">
            <AiOutlineUser color="#000" size={25}></AiOutlineUser>
          </NavLink>
        </div>
      </div>

      <div className="searchContainer searchForSmallerScreens">
        <BiSearch className="searchIcon" />
        <input type="text" id="" placeholder="Search Products..." />
      </div>
    </div>
  );
}

export default Header;
