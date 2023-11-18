import React from "react";
import Nav from "./nav/Nav";
import About from "./about/About";
import Work from "./work/Work";
import Contact from "./contact/Contact";

export default function ComponentWrapper() {
  return (
    <div>
      <Nav />
      <About />
      <Work />
      <Contact />
    </div>
  );
}
