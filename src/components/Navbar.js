import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/UseOnlineStatus";
import LoginModal from "./LoginModal";
import OrderModal from "./OrderModal"

function Navbar() {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showOrdernModal, setShowOrderModal] = useState(false);
  const onlineStatus = useOnlineStatus();
  

  return (
    <>
      <nav className="navbar">

        <div className="logo">🍔 Foodie</div>

        <div>
          <h3>
            Online Status: {onlineStatus ? "✔️" : "❌"}
          </h3>
        </div>
        <button
            onClick={() => setShowOrderModal(true)}
            className="login-btn"
          >
            Place Order
          </button>

        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/grossary">Grocessary</Link>
        </ul>

        <div className="nav-right">
          <span className="cart">🛒 Cart</span>

          <button
            onClick={() => setShowLoginModal(true)}
            className="login-btn"
          >
            Login
          </button>

        </div>

      </nav>
      {
        showOrdernModal &&(<OrderModal closeModal={()=>setShowOrderModal(false)}/>)
      }

      {showLoginModal && (
        <LoginModal closeModal={() => setShowLoginModal(false)} />
      )}
    </>
  );
}

export default Navbar;