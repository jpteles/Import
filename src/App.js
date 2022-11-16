import './App.css';
import Header from './Componentes/Header.jsx';
import Home from './Componentes/Home.jsx'
import Impacto from './Componentes/Impacto.jsx'
import Rodape from './Componentes/Rodape.jsx';
import Registro_Empresa from './Componentes/Registro_Empresa'
import Vagas from './Componentes/Vagas.jsx'
import Cadastro_Pessoa from './Componentes/Cadastro_Pessoa.jsx'
import Cadastro_Vaga from './Componentes/Cadastro_Vaga';

function App() {
  return (
    <>
    <Header />
    <Home />
    <Impacto />
    <Registro_Empresa />
    <Vagas />
    <Cadastro_Pessoa />
    <Cadastro_Vaga />
    <Rodape />
    
    </>
  )
}

export default App;