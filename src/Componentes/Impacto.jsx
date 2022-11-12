import styles from '../css/Impacto.module.css'
import imagem1 from '../imagens/Char 12.png'
import Menu_impacto from './MenuImpacto';


function Impacto(){
    return(
        <section className={styles.impacto}>
            <h1 className={styles.titulo_impacto}>Como Geramos Impacto</h1>
            <div className={styles.container_impacto}>
            <Menu_impacto img={imagem1} titulo="Difusão e propaganda nas redes" descricao={"Analisando a necessidade urgente de impactar mais pessoas com o problema da crise migratória no Brasil, fazemos um trabalho ativo de difusão de informações"} />
            <Menu_impacto img={imagem1} titulo="Trabalho voluntário" descricao={"Existem muitas pessoas que assim como nós, realmente se importam. Essas pessoas nos auxiliam a manter o Import vivo."} />
            <Menu_impacto img={imagem1} titulo="Aulas de COmunicação e português" descricao={"Existem muitas pessoas que assim como nós, realmente se importam. Essas pessoas nos auxiliam a manter o Import vivo."} />
            <Menu_impacto img={imagem1} titulo="Difusão e propaganda nas redes" descricao={"Analisando a necessidade urgente de impactar mais pessoas com o problema da crise migratória no Brasil, fazemos um trabalho ativo de difusão de informações"} />
            <Menu_impacto img={imagem1} titulo="Trabalho voluntário" descricao={"Existem muitas pessoas que assim como nós, realmente se importam. Essas pessoas nos auxiliam a manter o Import vivo."} />
            <Menu_impacto img={imagem1} titulo="Aulas de COmunicação e português" descricao={"Existem muitas pessoas que assim como nós, realmente se importam. Essas pessoas nos auxiliam a manter o Import vivo."} />
            </div>
            
        </section>
        
    )
}
export default Impacto;