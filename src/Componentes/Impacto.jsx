import styles from '../css/Impacto.module.css'
import imagem1 from '../imagens/mapa.jpg'
import imagem2 from '../imagens/trabalhovoluntario.jpg'
import imagem3 from '../imagens/linguaportuguesa.jpg'
import imagem4 from '../imagens/bussola.jpg'
import imagem5 from '../imagens/trabalho.jpg'
import imagem6 from '../imagens/socioemocional.jpg'
import Menu_impacto from './MenuImpacto';


function Impacto(){
    return(
        <section className={styles.impacto}>
            <div className={styles.container_impacto}>
            <Menu_impacto img={imagem1} titulo="Difusão e propaganda nas redes" descricao={""} />
            <Menu_impacto img={imagem2} titulo="Trabalho voluntário" descricao={""} />
            <Menu_impacto img={imagem3} titulo="Aulas de COmunicação e português" descricao={""} />
            <Menu_impacto img={imagem5} titulo="Documentação" descricao={""} />
            <Menu_impacto img={imagem4} titulo="Direcionamento" descricao={""} />
            <Menu_impacto img={imagem6} titulo="Socio emocional" descricao={""} />
            </div>
            
        </section>
        
    )
}
export default Impacto;