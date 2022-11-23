import styles from '../css/Time.module.css'
import Biel from '../imagens/bielmarcelooo.jpeg'
import Anderson from '../imagens/andersonnn.jpeg'
import Gui from '../imagens/guilherme.jpg'
import Frankle from '../imagens/frankleee.jpeg'
import Jean from '../imagens/jeannn.jpeg'
import Joao from '../imagens/joaopaulooo.jpg'
import Luan from '../imagens/luannn.jpeg'

function Home(){
    return(
        <section className={styles.Time}>
            <h1>Time de Desenvolvimento</h1>
            <div className={styles.Container_time}>
                <div className={styles.integrantes}>
                    <img src={Biel} alt='int' />
                    <h3>Gabriel Marcelo</h3>
                    <p>POO, 
                        <br />
                    Back-End
                    </p>
                </div>
                <div className={styles.integrantes}>
                    <img src={Anderson} alt='int' />
                    <h3>Anderson</h3>
                    <p>Scrum Master
                    </p>
                </div>
                <div className={styles.integrantes}>
                    <img src={Gui} alt='int' />
                    <h3>Guilherme</h3>
                    <p>Back-End</p>
                </div>
                <div className={styles.integrantes}>
                    <img src={Frankle} alt='int' />
                    <h3>Isfrankle</h3>
                    <p>Designer</p>
                </div>
                <div className={styles.integrantes}>
                    <img src={Jean} alt='int' />
                    <h3>Jean</h3>
                    <p>Front-End</p>
                </div>
                <div className={styles.integrantes}>
                    <img src={Joao} alt='int' />
                    <h3>João Paulo</h3>
                    <p>Front-End</p>
                </div>
                <div className={styles.integrantes}>
                    <img src={Luan} alt='int' />
                    <h3>Luan</h3>
                    <p>Designer</p>
                </div>
            </div>
        </section>
    )
}
export default Home;