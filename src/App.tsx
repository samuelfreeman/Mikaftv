import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Pages/components/Navbar'
import Programes from './Pages/Programes'


const App: React.FC = () => {

  return (
    <BrowserRouter>


      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/comingsoon' element={<About />} />
        <Route path='/comingsoon' element={<About />} />
        <Route path='/comingsoon' element={<About />} />
        <Route path='/comingsoon' element={<About />} />
        <Route path='/programmes' element={<Programes />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;