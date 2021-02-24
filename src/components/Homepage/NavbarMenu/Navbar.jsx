import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/careers">Careers</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  );
}

export default Navbar;
