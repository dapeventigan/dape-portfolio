import React from "react";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
// import Experiences from "./components/experiences/Experiences";
import Projects from "./components/projects/Projects";
import Contact from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Skills />
      <Projects />
      {/* <Experiences /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
