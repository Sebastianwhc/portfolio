import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';          // Importamos tu portada
import ProjectPage from './ProjectPage'; // Importamos la página de detalles

// --- COMPONENTE MÁGICO PARA SCROLL ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta (pathname)

  return null;
};

const App = () => {
  // El estado del idioma vive aquí para mantenerse al cambiar de página
  const [lang, setLang] = useState('en'); 

  return (
    <Router>
      <Routes>
        {/* Ruta principal: Pasa el idioma y la función para cambiarlo */}
        <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
        
        {/* Ruta de detalle: Solo necesita saber el idioma actual */}
        <Route path="/project/:id" element={<ProjectPage lang={lang} />} />
      </Routes>
    </Router>
  );
};

export default App;