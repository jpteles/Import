import styles from '../css/Contato.module.css'
import email from '../imagens/vectoremail.png'
import tel from '../imagens/vectortelefone.png'
import imgmundo from '../imagens/refugiados_cedepe 1.png'

function Contato(){
    return(
        <section className={styles.Contato}>
            <div className={styles.formascontato}>
                <h3>Formas de contato</h3>
                <div className={styles.contatoemail_tel}>
                    <img src={email} alt="telefone" />
                    <p>InstitutoImport@senacsp.edu.br</p>
                </div>
                <div className={styles.contatoemail_tel}>
                    <img src={tel} alt="telefone" id={styles.telefone} />
                    <p>+55 11 94527-0673</p>
                </div>
            </div>
            <div className={styles.fale_conosco}>
                <h3>Fale conosco</h3>
                <p>Gostaríamos muito de ouvir de você. Entre em contato conosco se quiser contribuir com nossa missão ou saber mais sobre nossa visão.</p>
            </div>
            <div className={styles.parte_mundo}>
                <img src={imgmundo} alt="planeta terra" />
                <h4>Uma plataforma para quem se importa</h4>
                <p>
                Algumas pessoas decidem abandonar seus lares em busca da sobrevivência, você precisa decidir se quer ajudar.
                </p>    
            </div>
        </section>
    )
}
export default Contato;