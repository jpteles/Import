import styles from '../css/Registro_Empresa.module.css'
import Imagem_empresa from '../imagens/imagem_empresa.png'

function Registro_Empresa(){
    return(
        <section className={styles.registro_empresa}>
            <div className={styles.formulario_empresa}>
                
                <div className={styles.caixa_form}>
                    <label for="nome_empresa">Nome da empresa:</label>
                    <input type="texto" id={styles.nome} name="nome_empresa" />
                </div>
                
                <div className={styles.caixa_form}>
                    <label for="email">Email</label>
                    <input type="email" id={styles.email} name="email" />
                </div>
                
                <div className={styles.caixa_form}>
                <label for="nome">Seu nome e sobrenome</label>
                    <input type="texto" id={styles.nome} name="nome_usuario" />
                </div>
                
                <div className={styles.caixa_form}>
                <label for="telefone">Seu número de telefone</label>
                    <input type="number" id={styles.telefone} name="telefone" />
                </div>

                <div className={styles.caixa_form}>
                    <label for="cnpj">CNPJ</label>
                    <input type="number" id={styles.cnpj} name="cnpj" />
                </div>
                
                <div className={styles.caixa_form}>
                <button type="submit" className={styles.botao}>Continuar</button>
                </div>
            </div>

            <div className={styles.crie_conta}>
                <div className={styles.textos_crie_conta}>
                    <h2>Crie uma conta para a sua empresa</h2>
                    <p>antes de anunciar uma vaga temos que fazer o cadastro da empresa</p>
                </div>
                <div className={styles.imagem_empresa}>
                    <img src={Imagem_empresa} alt='imagem empresa'></img>
                </div>
            </div>
        </section>
    )
}
export default Registro_Empresa;