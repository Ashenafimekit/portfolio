import React from "react";
import { Element } from "react-scroll";
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import Project from "../components/Project";
import Tech from "../components/Tech";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Landing = () => {
  return (
    <div className="text-white bg-main flex flex-col gap-10">
      <Header />
      <Hero />
      <div className="flex flex-col px-5 sm:px-20 md:px-40 lg:px-60 gap-40 py-40 border-b">
        <Element name="about">
          <About />
        </Element>
        <Element name="project">
          <Project />
        </Element>
        <Element name="tech">
          <Tech />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
