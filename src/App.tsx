import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router'
import './index.css'
import Home from './Pages/Home'
import CommingSoon from './Pages/CommingSoon'

import Programes from './Pages/Programes'

import { AnimatePresence } from "framer-motion";
import About from './Pages/About'


const Application: React.FC = () => {
  const location = useLocation();
  return (

    <AnimatePresence mode="wait">
      {/* <Navbar /> */}
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/comingsoon' element={<CommingSoon />} />
        <Route path='/comingsoon' element={<CommingSoon />} />
        <Route path='/comingsoon' element={<CommingSoon />} />
        <Route path='/comingsoon' element={<CommingSoon />} />
        <Route path='/programmes' element={<Programes />} />
        <Route path='/about' element={<About />} />
      </Routes>
      {/* <SiteFooter /> */}
    </AnimatePresence>

  )
}






const App = () => {
  return (
    <Router>
      <div>
        <Application />
      </div>
    </Router>
  )
}

export default App
