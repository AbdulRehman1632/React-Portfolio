import React from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbars from "./Components/NavInfo/Navbars";

const App = () => {
  return (
    <div>
      <Router>
        <Navbars />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="home" />
          <Route element={<About />} path="about" />
          <Route element={<Skills />} path="skills" />
          <Route element={<Projects />} path="projects" />
          <Route element={<Contact />} path="contact" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
