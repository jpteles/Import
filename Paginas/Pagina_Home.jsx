import Header from '../Componentes/Header.jsx';
import Home from '../Componentes/Home.jsx'
import Depoimento from '../Componentes/Depoimento';
import Impacto from '../Componentes/Impacto.jsx'
// import Rodape from '../Componentes/Rodape.jsx';

function Pagina_Home() {
    return (
      <>
      <Header />
      <Home />
      <Depoimento />
      <Impacto />
      {/* <Rodape /> */}
      </>
    )
  }
  
  export default Pagina_Home;