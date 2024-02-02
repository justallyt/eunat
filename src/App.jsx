import './App.css'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
function App() {
  return (
    <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/about/' element={<About />} />
               <Route path='/services/' element={<Services />} />
               <Route path='/contact-us/' element={<Contact />} />
    </Routes>
  )
}

export default App
