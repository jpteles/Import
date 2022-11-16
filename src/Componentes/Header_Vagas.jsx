import styles from '../css/Header_Vaga.module.css'
import Logo from '../imagens/logo_import.png'


function Header_Vagas(){
    return(
        <header className={styles.Header_Vagas}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            
            <div className={styles.perfil_anuncio}>
                <p>Guilherme Romeiro</p>
                <img src='300x300'></img>
            </div>
            <div className={styles.div_botao}>
            <button type="submit" className={styles.botao_anunciar}> Anunciar vagas </button>
            </div>
            <div className={styles.search_box}>
            <div class="input-group">
                <div className={styles.form_outline}>
                    <input type="search" value="Pesquisar Vagas" id="form1" class="form-control" />
                    
                </div>
                <button type="button" className={styles.btn}>
                    Achar Vagas
                </button>
                </div>
                </div>
            
        </header>
        
    )
}
export default Header_Vagas;