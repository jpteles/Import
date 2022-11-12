import styles from '../css/Home.module.css'
import Imagem_crianca from '../imagens/imagem_crianca.png'
import Linha from '../imagens/Line 2.png'

function Home(){
    return(
        <section className={styles.home}>
            <img src={Imagem_crianca} alt="ImagemCriança" className={styles.imgcrianca} />
            <div className={styles.home_texto}>
            <h1 className={styles.titulo}>Uma plataforma para quem se importa</h1>
            <img src={Linha} alt="linha" className={styles.linha} />
            <p className={styles.texto_import}>A Import surgiu a partir da necessidade de ajudar milhares de refugiados que chegam ao Brasil. Somos uma instituição sem fins lucrativos, com princípios de defesa dos direitos humanos, em busca de proporcionar dignidade e esperança para aqueles que deixaram toda sua história para trás, em busca da sobrevivência</p>
            <button type="submit" className={styles.botao2}> Seja Voluntário </button>
            </div>
            
        </section>
    )
}
export default Home;