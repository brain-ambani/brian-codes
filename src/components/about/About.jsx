import React from "react";
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
    <div>
      <h1>About Me</h1>
      <p>
        Hello! My name is Enock and I enjoy creating things that live on the
        internet. My interest in web development started back in 2019 when I
        decided to try and edit a web template but it turned to be my first web
        project and it taught me a lot about HTML & CSS! My main focus these
        days is building accessible, inclusive products and digital experiences
        for a variety of clients.
      </p>
      <div>
        <SiJavascript />
        <FaReact />
        <TbBrandNextjs />
        <SiTailwindcss />
        <FaNodeJs />
        <FaGithub />
        <SiExpress />
        <SiTypescript />
        <SiMongodb />
      </div>
    </div>
  );
}
