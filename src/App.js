import './App.css';
import Pagina_Home from './Paginas/Pagina_Home.jsx'
import Pagina_QuemSomos from './Paginas/Pagina_QuemSomos.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pagina_Home />} />
                <Route path="/quem_somos" element={<Pagina_QuemSomos />} />
            </Routes>
        </BrowserRouter>
    
    </>
  )
}

export default App;