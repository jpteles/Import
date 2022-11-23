import styles from '../css/Rodape.module.css'
import Divisor from '../imagens/Divider.png'
import Logo2 from '../imagens/logo_import2.png'
import Face from '../imagens/Facebook Icon.png'
import Twitter from '../imagens/Twitter Icon.png'
import Linkedin from '../imagens/Linkedin Icon.png'

function Rodape(){
    return(
        <footer className={styles.rodape}>
            <div className={styles.rodape_doar}>
                    <h1>Ajude a mudar a vida dessas pessoas</h1>
                <div className={styles.botoes}>
                    <button type="submit" className={styles.receber_noticias}>RECEBER NOTÍCIAS</button>
                    <button type="submit" className={styles.doar}>DOAR</button>
                </div>
            </div>
            <div className={styles.container_footer}>
                <div className={styles.navegacao}>
                    <h4>NAVEGAÇÃO</h4>
                    <br />
                    <a href='#'>Home</a>
                    <br /><br />
                    <a href='#'>Sobre nós</a>
                    <br /><br />
                    <a href='#'>O que fazemos</a>
                    <br /><br />
                    <a href='#'>Doar</a>
                </div>
                <div className={styles.servicos}>
                    <h4>SERVIÇOS</h4>
                    <br />
                    <a href='#'>Apoio Emocional</a>
                    <br /><br />
                    <a href='#'>Ajuda Comunicativa</a>
                    <br /><br />
                    <a href='#'>Apoio para empreender</a>
                    <br /><br />
                    <a href='#'>Auxilio para documentação</a>
                </div>
                <div className={styles.infos_legais}>
                    <h4>INFORMAÇÕES LEGAIS</h4>
                    <br />
                    <a href='#'>General info</a>
                    <br /><br />
                    <a href='#'>Privacy Policy</a>
                    <br /><br />
                    <a href='#'>Terms of</a>
                </div>
                <div className={styles.fale_conosco}>
                    <h4>FALE CONOSCO</h4>
                    <br />
                    <a href='#'>InstituoImport@gmail.com</a>
                    <br /><br />
                    <a href='#'>+55 11 94527-0673</a>
                </div>
            </div>
            <div className={styles.footer_baixo}>
                    <img src={Divisor} alt="linha" id={styles.linha_footer} />
                <div className={styles.logo_rede}>
                    <img src={Logo2} alt="logo import" id={styles.logo2} />
                    <p>© 2022 Instituto Import. Todos os direitos reservados. </p>
                    <img src={Face} alt="logo facebook" id={styles.face} />
                    <img src={Linkedin} alt="logo Linkedin" id={styles.linkedin} />
                    <img src={Twitter} alt="logo Twitter" id={styles.twitter} />
                </div>
            </div>
        </footer>
    )
}
export default Rodape;