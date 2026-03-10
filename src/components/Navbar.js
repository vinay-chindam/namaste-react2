import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/UseOnlineStatus";
import LoginModal from "./LoginModal";
import OrderModal from "./OrderModal"
import ThemeContext from "../contexts/ThemeContext";

function Navbar() {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showOrdernModal, setShowOrderModal] = useState(false);
  const onlineStatus = useOnlineStatus();
  const {toggleTheme}=useContext(ThemeContext)

  

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
          <button
            onClick={toggleTheme}
            className="login-btn"
          >
            Change theme
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