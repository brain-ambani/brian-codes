import React from "react";
import "./hero.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profile from "../../assets/profile.png";

export default function Hero() {
  return (
    <div className="hero" id="home">
      <img className="profile" src={profile} alt="profile" />
      <h2>Brian Ambani</h2>
      <h1>I build interactive web stuff.</h1>
      <p>
        I am a highly collaborative team player who thrives in dynamic and
        fast-paced environments. My excellent communication and problem-solving
        skills allow me to work effectively with cross-functional teams to
        deliver solutions that exceed expectations.
      </p>
      <div className="socials">
        <a
          href="https://github.com/brian-ambani"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="github" />
        </a>
        <a
          href="https://linkedin.com/in/brain-ambani/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="linkedin" />
        </a>
        <a
          href="https://twitter.com/brain_ambani"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="twitter" />
        </a>
      </div>
      <a href="mailto:brainambani1@gmail.com" className="btn">
        Get In Touch
      </a>
      {/* <button className="btn btn-hero">Get in touch</button> */}
    </div>
  );
}
