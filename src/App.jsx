import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home'
import Videocall from './video'
import { BrowserRouter as Router, Route, Routes } from'react-router-dom'
function App() {
  
 
  return (
    <>
    <Router>
   {/* router and route set  */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<Videocall/>} />
      
    </Routes>
    
    </Router>
      
    </>
  )
}

export default App
