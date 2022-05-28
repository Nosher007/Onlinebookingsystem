import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import './sass/main.scss';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Terminal from "./components/Terminal"
import Karachi from "./components/Karachi";
import Islamabad from "./components/Islamabad";
import Quetta from "./components/Quetta";
import PurchaseTickets from "./components/PurchaseTickets";

function App() {
  return (
      <>
      <div className="main-styling">
          <Router>
            <Header/>
            
            <Routes>
              <Route path="/" element={<Home/>}></Route> 
              <Route path="/contact" element={<Contact/>}></Route> 
              <Route path="/lahore" element={<Terminal/>}></Route>
              <Route path="/karachi" element={<Karachi/>}></Route>
              <Route path="/islamabad" element={<Islamabad/>}></Route>
              <Route path="/quetta" element={<Quetta/>}></Route>
              <Route path="/ticket" element={<PurchaseTickets/>}></Route> 
            </Routes>
            
            <Footer/>

          </Router>
        </div>
      </>
  );
}

export default App;
