import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <h1>Brian</h1>
      <nav>
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
      </nav>
      <button>Resume</button>
    </div>
  );
}
