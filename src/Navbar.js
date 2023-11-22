import React from 'react';
import { Link } from "react-router-dom";
import logo from './images/logo.png';
import './Navbar.css';

const Navbar = ({tab}) => (
  <nav>
    <div className="logo">
      <img src={logo} alt="Tasty Trove Logo" 
      style={{width: "200px", height: "auto", color: "white"}}/>
    </div>
    <ul>
      <li><Link to="/"
      style={{
        color: tab == "home" ? "yellow" : "white",
        cursor: tab == "home" ? "default" : "pointer"
      }}>
        Home
      </Link></li>

      <li><Link to="/contact"
      style={{
        color: tab == "contact" ? "yellow" : "white",
        cursor: tab == "contact" ? "default" : "pointer"
      }}>
        Contact Us
      </Link></li>
    </ul>
  </nav>
);

export default Navbar;