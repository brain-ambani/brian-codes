import React from "react";
import Nav from "./nav/Nav";
import About from "./about/About";
import Work from "./work/Work";
import Contact from "./contact/Contact";
import Hero from "./hero/Hero";

export default function ComponentWrapper() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}
