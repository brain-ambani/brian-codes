import React from "react";
import "./contact.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Get In Touch</h1>
      <p>
        I’m currently looking for any new opportunities and my inbox is always
        open. Whether you have a project or just want to say hi, I’ll get back
        to you!
      </p>
      <a href="mailto:brainambani1@gmail.com" className="btn">
        Get In Touch
      </a>
      <div className="socials">
        <a
          href="https://github.com/brian-ambani"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="github" />
        </a>
        <a
          href="linkedin.com/in/brain-ambani-91522b172/"
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

      <p className="copyright">Copyright&copy;: 2023</p>
    </div>
  );
}
