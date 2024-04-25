import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/properties"> Properties </Link>
          <Link to="/profile"> Profile </Link>
          <Link to="/signup"> Contact Us </Link>
        </div>
      </div>
      <div className="rightSide">
      <Link to="/"> Home </Link>
      <Link to="/properties"> Properties </Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/signup"> Contact Us </Link>
        <button onClick={toggleNavbar}>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
