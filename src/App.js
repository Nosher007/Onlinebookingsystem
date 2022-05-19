import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import './sass/main.scss';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Terminal from "./components/Terminal"
import News from "./components/News"

function App() {
  return (
      <>
      <div className="main-styling">
          <Router>
            <Header/>
            
            <Routes>
              <Route path="/" element={<Home/>}></Route> 
              <Route path="/contact" element={<Contact/>}></Route> 
              <Route path="/about" element={<About/>}></Route> 
              <Route path="/terminal" element={<Terminal/>}></Route> 
              <Route path="/news" element={<News/>}></Route> 

            </Routes>
            
            <Footer/>

          </Router>
        </div>
      </>
  );
}

export default App;
