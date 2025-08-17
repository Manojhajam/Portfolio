import React from 'react'
import { Route, Routes} from "react-router-dom"
import Navbar from './components/Layout/Navbar'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Work from './components/Work/Work'

const App = () => {
  return (
    <>
       <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       

    </>
  );
}

export default App
