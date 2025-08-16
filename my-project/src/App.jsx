import React from 'react'
import Navbar from './components/Layout/Navbar'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Work from './components/Work/Work'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs/>} />
        <Route exact path="/skills" element={<Skills/>} />
        <Route exact path="/education" element={<Education/>} />
        <Route exact path="/about" element={<AboutUs/>} />
        <Route exact path="/work" element={<Work/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
