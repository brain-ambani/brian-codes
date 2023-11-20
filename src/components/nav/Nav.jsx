import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <a href="#home" className="nav-logo">
        Brian
      </a>

      <div className="nav-items">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <a href="#contact" className="btn resume">
        Resume
      </a>
    </div>
  );
}
