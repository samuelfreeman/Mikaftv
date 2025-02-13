import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import Home from './Pages/Home'
import CommingSoon from './Pages/CommingSoon'

import Programes from './Pages/Programes'


const App: React.FC = () => {

  return (
    <BrowserRouter>


      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/comingsoon' element={<CommingSoon />} />
        <Route path='/comingsoon' element={<CommingSoon />} />
        <Route path='/comingsoon' element={<CommingSoon />} />
        <Route path='/comingsoon' element={<CommingSoon />} />
        <Route path='/programmes' element={<Programes />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;