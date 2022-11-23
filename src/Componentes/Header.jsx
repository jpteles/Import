import styles from '../css/Header.module.css'
import Logo from '../imagens/logo_import.png'
import coracao from '../imagens/coracao.png'
import { Link } from "react-router-dom";


function Header(){
    return(
        <header className={styles.content}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            <div className={styles.login}>
                <button type="submit" className={styles.botao}><img src={coracao} /> LOGIN </button>
            </div>
            <nav className={styles.dp_menu}>
        <ul>
            <li> 
        <Link to="/" id={styles.botaohome}>
            Home
            </Link>
            </li>
            <li><a href="#">Serviços</a>
                <ul>
                    <li><a href="#"><Link to="/quem_somos">Quem Somos</Link></a></li>
                    <li><a href="#">Psicologia como funciona?</a></li>
                    <li><a href="#">Como tirar documentos?</a></li>
                    <li><a href="#series">Idiomas como aprender</a></li>
                    <li><a href="#">Vagas de trabalho</a></li>
                </ul>
            </li>
            <li><a href="#">Doação</a></li>
        </ul>
    </nav>
        </header>
        
    )
}
export default Header;