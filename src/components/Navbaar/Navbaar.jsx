import React, { useState } from "react";
import "./navbaar.css";
import { Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbaar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu");

  return (
    <>
      <div className="navbaar">
        <img src={assets.logo} alt="logo" className="logo" />
        <ul className="navbar-menu">
          <li
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu
          </li>
          <li
            onClick={() => setMenu("Mobile")}
            className={menu === "Mobile" ? "active" : ""}
          >
            Mobile App
          </li>
          <li
            onClick={() => setMenu("Contact")}
            className={menu === "Contact" ? "active" : ""}
          >
            Contact us
          </li>
        </ul>
        <div className="navbar_right">
          <img src={assets.search_icon} alt="search" className="search_icon" />
          <div className="navbar_search_icon">
            <img src={assets.basket_icon} alt="basket" />
            <div className="dot"></div>
          </div>
          <button onClick ={()=>setShowLogin(true)}>Sign in</button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbaar;
