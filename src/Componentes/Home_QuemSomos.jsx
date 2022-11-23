import styles from '../css/Home_QuemSomos.module.css'
import Familia_qmsomos from '../imagens/imagemfamilia.png'
import leveumsorriso from '../imagens/leveumsorriso.png'


function Home_QuemSomos(){
    return(
        <section className={styles.home_qmsomos}>
            <img src={Familia_qmsomos} alt="familia refugiada" />
            <div className={styles.container_texto}>
                <div className={styles.container_texto_filho}>
                    <h1>100% Transparente</h1>
                    <p>Todos os valores doados podem ser acompanhados de perto</p>
                </div>
                <div className={styles.container_texto_filho}>
                    <h1>Respeito cultural</h1>
                    <p>Respeitamos incondicionalmente os valores culturais dos refúgiados</p>
                </div>
                <div className={styles.container_texto_filho}>
                    <h1>Reconstruindo vidas</h1>
                    <p>Com a sua ajuda, poderemos reconstruir a vida de milhares de pessoas</p>
                </div>
            </div>
            <img src={leveumsorriso} alt="leveumsorriso" id={styles.leveumsorriso}></img>
        </section>
    )
}
export default Home_QuemSomos;