import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import About from './pages/About'
import Vehicles from './pages/Vehicles'
import Contact from './pages/Contact'
import Choose from './pages/Whychooseus'
import Whychooseus from './pages/Whychooseus'

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/About' element={<About />}/>
    <Route path='/Vehicles' element={<Vehicles />}/>
    <Route path='/Contact' element={<Contact />}/>
    <Route path='/Whychooseus' element={<Whychooseus/>}/>
   </Routes>
  )
}

export default App
