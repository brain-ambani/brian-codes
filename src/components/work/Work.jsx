import React from "react";
import "./Work.css";
import hosting from "../../assets/hosting.png";
import tracker from "..//../assets/tracker.png";

export default function Work() {
  return (
    <div className="work" id="work">
      <h1>Projects</h1>
      <div className="project-cards">
        <div class="project-card">
          <img src={hosting} width={300} height={200} alt="project 1" />
          <h3>FLIN X Hosting</h3>
          <p>
            Empowering businesses with seamless, scalable, and secure cloud
            solutions for optimal performance and digital innovation.
          </p>
          <a
            href="https://brian-ambani.github.io/modern-landing-page/"
            target="_blank"
            rel="noreferrer"
            className=" btn-work"
          >
            Live Preview
          </a>
          <a
            href="https://github.com/brian-ambani/modern-landing-page/"
            target="_blank"
            rel="noreferrer"
            className=" btn-work"
          >
            Source Code
          </a>
        </div>
        <div class="project-card">
          <img src={tracker} width={300} height={200} alt="project 1" />
          <h3>Task Tracker</h3>
          <p>
            Streamlining productivity with an intuitive platform for efficient
            task management and organization.
          </p>
          <a
            href="https://task-tracker-6pxk.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className=" btn-work"
          >
            Live Preview
          </a>
          <a
            href="https://github.com/brian-ambani/react-app/"
            target="_blank"
            rel="noreferrer"
            className=" btn-work"
          >
            Source Code
          </a>
        </div>
        <div class="project-card">
          <img src={hosting} width={300} height={200} alt="project 1" />
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatem, quidem iusto, quibusdam, quod voluptates accusamus
            voluptate.
          </p>
          <a
            href="https://brian-ambani.github.io/modern-landing-page/"
            target="_blank"
            rel="noreferrer"
            className=" btn-work"
          >
            Live Preview
          </a>
          <a
            href="https://github.com/brian-ambani/modern-landing-page/"
            target="_blank"
            rel="noreferrer"
            className=" btn-work"
          >
            Source Code
          </a>
        </div>
        <div class="project-card">
          <img src={hosting} width={300} height={200} alt="project 1" />
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatem, quidem iusto, quibusdam, quod voluptates accusamus
            voluptate.
          </p>
          <a
            href="https://brian-ambani.github.io/modern-landing-page/"
            target="_blank"
            rel="noreferrer"
            className=" btn-work"
          >
            Live Preview
          </a>
          <a
            href="https://github.com/brian-ambani/modern-landing-page/"
            target="_blank"
            rel="noreferrer"
            className=" btn-work"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
