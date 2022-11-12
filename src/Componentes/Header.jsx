import styles from '../css/Header.module.css'
import Logo from '../imagens/logo_import.png'


function Header(){
    return(
        <header className={styles.content}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            <div className={styles.login}>
                <button type="submit" className={styles.botao}> DOAR </button>
            </div>
            <nav className={styles.menu}>
                <a href='#'>Sobre</a>
                <a href='#'>Nosso objetivo</a>
                <a href='#'>Serviços</a>
            </nav>
        </header>
        
    )
}
export default Header;