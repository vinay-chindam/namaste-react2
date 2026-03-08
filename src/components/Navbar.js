import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/UseOnlineStatus";


function Navbar() {

    const [isLogin,setIslogin]=useState(false)
    const onlineStatus=useOnlineStatus()


  return (
    <nav className="navbar">

      <div className="logo" >
        🍔 Foodie
      </div>
      <div>
        <h3>Online Status:{onlineStatus ? "✔️" :" ❌"}</h3>
      </div>

      <ul className="nav-links">
        <Link to={"/"}>Home</Link>
        <Link path="/about" to={"/about"}>About</Link>
        <Link  to={"/contact"}>Contact</Link>
        <Link  to={"/grossary"}>Grocessary</Link>
      </ul>

      <div className="nav-right"> 
        <span className="cart">🛒 Cart</span>
        <button onClick={()=>setIslogin(!isLogin)} className="login-btn">{isLogin ? "Logout" : "Login"}</button>
      </div>

    </nav>
  );
}

export default Navbar;