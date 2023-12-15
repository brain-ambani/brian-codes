import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons
import "./Nav.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">Brian</div>
      <div className={`nav-links ${showMenu ? "show" : ""}`}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="btn cv-button">
        <a
          href="https://1drv.ms/b/s!AqJR2j3JhyyxhCIcynDpFgz4pzxb?e=m0eVHn"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </button>
      <div className="menu-icon" onClick={toggleMenu}>
        {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
