import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Menu from './components/Encabezado'
import Quien_soy from './components/Quien_soy'
import Experto from './components/Experto'
import Testimonios from './components/Testimonios'
import Mis_Proyectos from './components/Mis_Proyectos'
import Contact from './components/Contacto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
      <Routes>
        <Route path="/" element={<Quien_soy />} />
        <Route path="/proyectos" element={<Mis_Proyectos />} />
        <Route path="/experto" element={<Experto />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
