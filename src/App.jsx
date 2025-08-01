import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Project from './pages/Project'
import Contect from './pages/Contect'

import './App.css'

function App() {
  

  return (
    <>
   
    <BrowserRouter>
     <NavBar/>
    <Routes>

      <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<Project/>}/>
            <Route path="/service" element={<Service/>}/>
              <Route path="/contact" element={<Contect/>}/>
    </Routes>

    </BrowserRouter>

     
    </>
  )
}

export default App
