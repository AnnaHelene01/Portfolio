import React from 'react'
import { Route, Routes } from "react-router-dom";
import LayOut from "./components/layout/LayOut";
import Home from "./pages/home/Home";
import './main.css'
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

const App = () => {
  return (
    <>
      <LayOut>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </LayOut>
    </>
  );
}

export default App;
