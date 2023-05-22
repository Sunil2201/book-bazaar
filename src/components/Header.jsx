import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import "../index.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="headerContainer">
      <h2><NavLink to="/">book bazaar</NavLink></h2>
      <div className="searchContainer">
        <BiSearch className="searchIcon"/>
        <input type="text" id="" placeholder="Search" />
      </div>
      <div className="headerActions">
        <button>Login</button>
        <NavLink to="/wishlist"><AiOutlineHeart size={25}/></NavLink>
        <NavLink to="/cart"><AiOutlineShoppingCart size={25}/></NavLink>
        <NavLink to="/profile"><AiOutlineUser size={25}></AiOutlineUser></NavLink>
      </div>
    </div>
  );
}

export default Header;
