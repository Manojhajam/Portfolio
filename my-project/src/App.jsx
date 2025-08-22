import React from "react";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";
import { Element } from "react-scroll";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <AboutUs />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="work">
        <Work />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer/>
    </>
  );
};

export default App;
