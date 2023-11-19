import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <div>
      <img src="" alt="image" />
      <h2>Brian Ambani</h2>
      <h1>I build interactive web stuff.</h1>
      <p>
        I am a highly collaborative team player who thrives in dynamic and
        fast-paced environments. My excellent communication and problem-solving
        skills allow me to work effectively with cross-functional teams to
        deliver solutions that exceed expectations.
      </p>
      <div className="socials">
        <p>Github</p>
        <p>linkedin</p>
        <p>twitter</p>
      </div>
      <button>Get in touch</button>
    </div>
  );
}
