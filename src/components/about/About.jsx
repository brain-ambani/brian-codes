import React from "react";
import "./About.css";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export default function About() {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="about-wrapper">
        <div className="card">
          <p>
            Hello! My name is Brian and I enjoy creating things that live on the
            internet. My interest in web development started back in 2019 when I
            decided to try and edit a web template but it turned to be my first
            web project and it taught me a lot about HTML & CSS! My main focus
            these days is building accessible, inclusive products and digital
            experiences for a variety of clients.
          </p>
          <br></br>
          <p>
            I'm a software developer based in Nairobi, Kenya specializing in
            building (and occasionally designing) exceptional websites,
            applications, and everything in between.
          </p>
        </div>
        <div className="card card-skill">
          <SiJavascript
            className="skill skill-js"
            style={{ color: "yellow", size: "100px" }}
          />
          <FaReact className="skill" />
          <TbBrandNextjs className="skill" />
          <SiTailwindcss className="skill" />
          <FaNodeJs className="skill" />
          <FaGithub className="skill" />
          <SiExpress className="skill" />
          <SiTypescript className="skill" />
          <SiMongodb className="skill" />
        </div>
      </div>
    </div>
  );
}
