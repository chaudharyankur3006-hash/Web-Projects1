import React from 'react'
import Home from './Home'
import Navbar1 from './Navbar1'
import Tour_packages from './Tour_packages'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'
import Destination from './Destination'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar1/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/tour-packages' element={<Tour_packages />} />
        <Route path='/destination' element={<Destination />} />
      </Routes>
    </Router>
  )
}

export default App