import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import "../index.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="headerContainer">
      <h2>book bazaar</h2>
      <div className="searchContainer">
        <BiSearch className="searchIcon"/>
        <input type="text" id="" placeholder="Search" />
      </div>
      <div className="headerActions">
        <button>Login</button>
        <NavLink to="/wishlist"><AiOutlineHeart size={25}/></NavLink>
        <NavLink to="/cart"><AiOutlineShoppingCart size={25}/></NavLink>
      </div>
    </div>
  );
}

export default Header;
