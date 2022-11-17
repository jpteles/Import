import styles from '../css/Home.module.css'
import Imagem_mulherhome from '../imagens/fotomulherhome.png'


function Home(){
    return(
        <section className={styles.home}>
            <img src={Imagem_mulherhome} alt="Imagemmulherhome" className={styles.imgmulherhome} />
        </section>
    )
}
export default Home;