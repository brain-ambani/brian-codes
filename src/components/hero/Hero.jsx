import React from "react";
import "./hero.css";
import myprofile from "../../assets/myprofile.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="hero">
      <img className="profile" src={myprofile} alt="profile" />
      <h2>Brian Ambani</h2>
      <h1>I build interactive web stuff.</h1>
      <p>
        I am a highly collaborative team player who thrives in dynamic and
        fast-paced environments. My excellent communication and problem-solving
        skills allow me to work effectively with cross-functional teams to
        deliver solutions that exceed expectations.
      </p>
      <div className="socials">
        <a href="#">
          <FaGithub />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
      </div>
      <button className="btn">Get in touch</button>
    </div>
  );
}
