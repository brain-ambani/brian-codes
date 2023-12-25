import React from "react";
import "./Work.css";
import hulu from "../../assets/hulu.png";
import tracker from "..//../assets/tracker.png";
import hosting from "../../assets/hosting.png";
import workoutbuddy from "../../assets/workoutbuddy.png";

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
          <img src={hulu} width={300} height={200} alt="project thumbnail" />
          <h3>Hulu App</h3>
          <p>
            A clone of the popular streaming service Hulu built with React and
            Tailwind CSS.
          </p>
          <a
            href="https://hulu-clone-app-weld.vercel.app/"
            className=" btn-work"
            target="_blank"
            rel="noreferrer"
          >
            Live Preview
          </a>
          <a
            href="https://github.com/brian-ambani/hulu-clone"
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
          <img src={workoutbuddy} width={300} height={200} alt="project 1" />
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
      </div>
    </div>
  );
}
