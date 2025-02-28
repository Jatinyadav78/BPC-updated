
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Bpcl from "../images/English_Logo-r.png";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="main">
      <section className="one-fourth">
        <img src={Bpcl} alt="BPCL Logo" />
      </section>
      <ul className="menu">
        {isLoggedIn ? (
          <>
            <li>
              <button onClick={() => navigate("/")} className="nav-button">
                HOME
              </button>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                LOG OUT
              </button>
            </li>
          </>
        ) : (
          <li>
            <button onClick={() => navigate("/login")} className="nav-button">
              LOG IN
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

