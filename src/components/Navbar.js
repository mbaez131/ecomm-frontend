import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
