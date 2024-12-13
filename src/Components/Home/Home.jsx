import React from "react";
import PersonaInfo from "../PersonalInfo/PersonaInfo";
import { info } from "../../Utils/constant/Content";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";


const Home = () => {
  return (
    <>
      <PersonaInfo data={info} />
      <div className="component-wrapper">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Home;
