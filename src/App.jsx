import React, { useEffect, useState } from "react";
import About from "./components/about/About";
// import HeroSection from "../../components/heroSection/HeroSection";
//import Loader from "./components/loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Header from "./components/header/Header";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Navbar/>
        <Route path="/*"  exact={true} index element={Header } />
        <Route path="/about"  exact={true} index element={About} />
        <Route path="/skills"  exact={true} index element={Skills} />
        <Route path="/projects"  exact={true} index element={Projects} />
        <Route path="/contact"  exact={true} index element={Contact} />
      </Routes>
      </Router>
    </>
  )
}

export default App
