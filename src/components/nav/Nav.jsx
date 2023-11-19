import React from "react";
import "./Nav.css";
import { MdOutlineLightMode } from "react-icons/md";

export default function Nav() {
  return (
    <div className="nav">
      <h1>Brian</h1>
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
          <li>
            <a href="#contact">Resume</a>
          </li>
        </ul>
      </div>
      <button className="btn btn-switchmode">
        <MdOutlineLightMode />
      </button>
    </div>
  );
}
