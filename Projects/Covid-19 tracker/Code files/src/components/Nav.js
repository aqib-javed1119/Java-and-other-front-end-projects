import React from "react";
import "../css/App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="fixed-top">
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        <div style={{ fontSize: "1rem" }}>COVID Tracker</div>
      </Link>
      <ul className="nav-links">
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/symptom"
        >
          <li>Symptoms</li>
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/about"
        >
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
