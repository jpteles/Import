import styles from '../css/Contato.module.css'
import Telefone from '../imagens/telefone_icon.png'
import Imagem_mundo from '../imagens/mundorefugi.png'


function Contato(){
    return(
        <section className={styles.contato}>
            <div className={styles.info_contato}>
            <h2>Formas de contato</h2>
            <p id={styles.email}>InstitutoImport@senacsp.edu.br</p>
            <div className={styles.tel}>
                <img src={Telefone} alt='telefone' className={styles.icon_telefone}></img>
                <p id={styles.numero_tel}>+55 11 94527-0673</p>
            </div>
            <img src={Imagem_mundo} alt='mundo' className={styles.imagem_mundo}></img>
            <h3>Uma plataforma para quem se importa</h3>
            <p id={styles.texto_plataforma}>Algumas pessoas decidem abandonar seus lares em busca da sobrevivência, você precisa decidir se quer ajudar.</p>
            </div>
            <div className={styles.formulario}>
            <h2>Fale conosco!</h2>
            <p id={styles.fale_conosco}>Gostaríamos muito de ouvir de você. Entre em contato conosco se quiser contribuir com nossa missão ou saber mais sobre nossa visão.</p>
            
            
            <form action="/formulario-contato" method="post">
                <div className={styles.caixa_form}>
                    <label for="nome">Nome: *</label>
                <input type="texto" id={styles.nome} name="nome_usuario" />
                </div>
                <div className={styles.caixa_form}>
                <label for="email">E-mail: *</label>
                <input type="email" id="email" name="email_usuario" />
                </div>
                <div className={styles.caixa_form}>
                <label for="telefone">Telefone: *</label>
                <input type="tel" id="telefone" class="input-padrao"></input>
                </div>
                <div className={styles.caixa_form}>
        <label for="texto">Sua mensagem: *</label>
        <textarea id="texto" name="texto_usuario"></textarea>
    </div>
</form>
            </div>
        </section>
            
        
    )
}
export default Contato;