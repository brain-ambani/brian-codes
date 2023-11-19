import React from "react";
import "./Work.css";
import hosting from "../../assets/hosting.png";

export default function Work() {
  return (
    <div className="work" id="work">
      <h1>Projects</h1>
      <div className="project-cards">
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
