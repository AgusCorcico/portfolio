import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import {Routes, Route} from "react-router-dom";
import Technologies from "./routes/Technologies";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/project" element={<Project />}/> 
        <Route path="/about" element={<About />}/>
        <Route path="/technologies" element={<Technologies />}/>
        <Route path="/contact" element={<Contact />}/>  
      </Routes>
    </>
  );
}

export default App;
