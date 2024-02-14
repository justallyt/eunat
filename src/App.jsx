import './App.css'
import { useEffect } from 'react'
import {Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import SingleService from './pages/SingleService'
function App() {
  const location = useLocation()

  const alwaysOnTopPage = () =>{
       window.scrollTo(0, 0);
  }
  useEffect(()=>{
         alwaysOnTopPage()
  },[location])
  return (
    <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/about/' element={<About />} />
               <Route path='/services/' element={<Services />} />
               <Route path='/contact-us/' element={<Contact />} />
               <Route path='/service/:name' element={<SingleService />} />
    </Routes>
  )
}

export default App
