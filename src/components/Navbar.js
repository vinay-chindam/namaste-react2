import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {

    const [isLogin,setIslogin]=useState(false)

  return (
    <nav className="navbar">

      <div className="logo">
        🍔 Foodie
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="nav-right">
        <span className="cart">🛒 Cart</span>
        <button onClick={()=>setIslogin(!isLogin)} className="login-btn">{isLogin ? "Logout" : "Login"}</button>
      </div>

    </nav>
  );
}

export default Navbar;