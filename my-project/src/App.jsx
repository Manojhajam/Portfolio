import React from 'react'
import Navbar from './components/Layout/Navbar'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
