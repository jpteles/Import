import styles from '../css/Cadastro_Pessoa.module.css'
import fundobolinha from '../imagens/fundo2.png'

function Cadastro_Pessoa(){
    return(
        <section className={styles.Cadastro_Pessoa}>
            <div className={styles.divpai}>
                <div className={styles.div1}>
                    <h1>Fazer Cadastro de acesso ao Login</h1>
                </div>
                <div className={styles.div2}>
                    <div className={styles.caixa1}>
                        <label className={styles.nome_cima} for="nome">Nome</label>
                        <input type="texto" id={styles.formu} name="nome_empresa" />
                    </div>
                    <div className={styles.caixa1}>
                        <label className={styles.nome_cima} for="data_nascimento">Data de Nascimento</label>
                        <input type="date" id={styles.formu} name="nome_empresa" />
                    </div>
                </div>
                <div className={styles.div3}>
                    <div className={styles.caixa}>
                        <label className={styles.nome_cima} for="email">Email</label>
                        <input type="email" id={styles.formu} name="nome_empresa" />
                    </div>
                    <div className={styles.caixasenha}>
                        <div className={styles.senha1}>
                            <label className={styles.nome_senha1} for="senha">Senha</label>
                            <input type="password" id={styles.senha} name="nome_empresa" />
                        </div>
                        <div className={styles.senha2}>
                            <label className={styles.nome_senha2} for="confir_senha">Confirme sua senha</label>
                            <input type="password" id={styles.senha} name="nome_empresa" />
                        </div>
                    </div>
                    <div className={styles.caixa_bolinha}>
                        <label className={styles.opcoes} for="senha">Quem está acessando a plataforma?*</label>
                        <input type="radio" name="webmaster"/> Refugiado(a) <br />
                        <input type="radio" name="webmaster"/> Empregador(a) <br />
                        <input type="radio" name="webmaster"/> Psicologo(a) <br />
                        <input type="radio" name="webmaster"/> Professor(a)
                    </div>
                </div>
                <div className={styles.div4}>
                    <div className={styles.caixa}>
                        <button id={styles.save_cont}>Salvar e Continuar</button>
                    </div>
                </div>
            </div>
            <div className={styles.divpai2}>
                <img src={fundobolinha} alt="bolinhas" />
            </div>
        </section>
    )
}
export default Cadastro_Pessoa;