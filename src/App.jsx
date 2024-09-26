import './App.css'
import NavBar from './components/NavBar'
import { Index } from './pages/IndexPage'
import Projects from './pages/Projects'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Skills } from './pages/Skills'
import { Contact } from './pages/Contact'

function App() {


  return (
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/Acerca" replace />} /> {/* Redirige la ruta raíz a /Inicio */}
        <Route path="/Acerca" element={<Index />} />
        <Route path="/Proyectos" element={<Projects />} />
        <Route path="/Habilidades" element={<Skills />} />
        <Route path="/Contacto" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App


