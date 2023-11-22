import React from "react";
import "./Work.css";
import hosting from "../../assets/hosting.png";
import tracker from "..//../assets/tracker.png";

export default function Work() {
  return (
    <div className="work" id="work">
      <h1>Projects</h1>
      <div className="project-cards">
        <div class="project-card tracker-card">
          <img src={hosting} width={300} height={200} alt="project 1" />
          <h3>FLIN X Hosting</h3>
          <p>
            Empowering businesses with scalable & secure cloud solutions all
            round
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
          <div className="status">
            <p>
              Status: <span>Compeleted</span>
            </p>
          </div>
        </div>
        <div class="project-card tracker-card">
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

          <div className="status">
            <p>
              Status: <span>Completed</span>
            </p>
          </div>
        </div>
        <div class="project-card tracker-card">
          <img src={hosting} width={300} height={200} alt="project 1" />
          <h3>Workout Buddy</h3>
          <p>
            MERN stack application for tracking workouts and fitness progress.
          </p>
          <a href="#work" className=" btn-work">
            Live Preview
          </a>
          <a
            href="https://github.com/brian-ambani/workout-buddy/"
            target="_blank"
            rel="noreferrer"
            className=" btn-work"
          >
            Source Code
          </a>
          <div className="status">
            <p>
              Status: <span>Ongoing</span>
            </p>
          </div>
        </div>
        <div class="project-card tracker-card">
          <img src={hosting} width={300} height={200} alt="project thumbnail" />
          <h3>Memories App</h3>
          <p>
            A fullstack MERN application for storing memories and photos with a
            simple UI.
          </p>
          <a href="#work" className=" btn-work">
            Live Preview
          </a>
          <a
            href="https://github.com/brian-ambani/memories-mern-app"
            target="_blank"
            rel="noreferrer"
            className=" btn-work"
          >
            Source Code
          </a>
          <div className="status">
            <p>
              Status: <span>Ongoing</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
