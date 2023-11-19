import React from "react";
import "./hero.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="hero" id="home">
      <img
        className="profile"
        src="https://images.pexels.com/photos/7485787/pexels-photo-7485787.jpeg"
        alt="profile"
      />
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
          <FaGithub />
        </a>
        <a
          href="linkedin.com/in/brain-ambani-91522b172/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/brain_ambani"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
      <button className="btn">Get in touch</button>
    </div>
  );
}
