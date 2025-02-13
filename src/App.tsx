import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './index.css'
import Home from './Pages/Home'
import CommingSoon from './Pages/CommingSoon'

import Programes from './Pages/Programes'
import Navbar from './Pages/components/Navbar'
import { SiteFooter } from './Pages/components/Footer'
import About from './Pages/About'


const App: React.FC = () => {

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comingsoon' element={<CommingSoon />} />
        <Route path='/comingsoon' element={<CommingSoon />} />
        <Route path='/comingsoon' element={<CommingSoon />} />
        <Route path='/comingsoon' element={<CommingSoon />} />
        <Route path='/programmes' element={<Programes />} />
        <Route path='/about' element={<About />} />
      </Routes>
      {/* <SiteFooter /> */}
    </Router>
  )
}


export default App;