import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/UseOnlineStatus";
import LoginModal from "./LoginModal";

function Navbar() {

  const [showModal, setShowModal] = useState(false);
  const onlineStatus = useOnlineStatus();
  console.log("showModal:", showModal);

  return (
    <>
      <nav className="navbar">

        <div className="logo">🍔 Foodie</div>

        <div>
          <h3>
            Online Status: {onlineStatus ? "✔️" : "❌"}
          </h3>
        </div>

        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/grossary">Grocessary</Link>
        </ul>

        <div className="nav-right">
          <span className="cart">🛒 Cart</span>

          <button
            onClick={() => setShowModal(true)}
            className="login-btn"
          >
            Login
          </button>
        </div>

      </nav>

      {showModal && (
        <LoginModal closeModal={() => setShowModal(false)} />
      )}
    </>
  );
}

export default Navbar;