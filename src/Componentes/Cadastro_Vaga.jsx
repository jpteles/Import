import styles from '../css/Cadastro_Vaga.module.css'
import Mulher_Vaga from '../imagens/mulhervaga.png'
import imagem_beneficio from '../imagens/imagembeneficio.png'

function Cadastro_Vaga(){
    return(
        <section className={styles.cadastro_vaga}>
            <div className={styles.comeco_vaga}>
                <div className={styles.comeco_titulo}>
                    <h1>Comece seu Cadastro de Vagas</h1>
                    <h2>inclua informações basicas abaixo</h2>
                </div>
                <div className={styles.comeco_imagem}>
                    <img src={Mulher_Vaga} alt="mulhervaga"></img>
                </div>
            </div>
            <div className={styles.info_vaga}>
                <p>País: Brasil</p>
                <p>Idioma: Português</p>
                <p>Nome da empresa: Mc Donald`s</p>
            </div>
            <div className={styles.titulo_vaga}>
                    <div className={styles.caixas_tit_vaga}>
                        <label className={styles.nome_cima} for="nome">Título da Vaga:</label>
                        <input type="texto" id={styles.formu} />
                    </div>
                    <div className={styles.tip_vg}>
                        <label className={styles.nome_cima} for="data_nascimento">Tipo da Vaga:</label>
                        <input type="texto" id={styles.tipo_vaga} />
                    </div>
            </div>
            <div className={styles.local_vaga}>
                    <div className={styles.caixas_tit_vaga}>
                        <label className={styles.nome_cima} for="nome">Endereço:</label>
                        <input type="texto" id={styles.formu} />
                    </div>
                    <div className={styles.tip_vg}>
                        <label className={styles.nome_cima} for="data_nascimento">Bairro:</label>
                        <input type="texto" id={styles.tipo_vaga} />
                    </div>
                    
                    <div className={styles.caixasenha}>
                        <div className={styles.senha1}>
                            <label className={styles.nome_senha1} for="senha">Cidade:</label>
                            <input type="texto" id={styles.senha} name="nome_empresa" />
                        </div>
                        <div className={styles.senha2}>
                            <label className={styles.nome_senha2} for="confir_senha">Estado:</label>
                            <input type="texto" id={styles.senha} name="nome_empresa" />
                        </div>
                        <div className={styles.senha3}>
                            <label className={styles.nome_senha3} for="confir_senha">CEP:</label>
                            <input type="texto" id={styles.senha} name="nome_empresa" />
                        </div>
                    </div>
            </div>

            <div className={styles.mapa_vaga}>
                mapa
            </div>

            <div className={styles.salario_num_vaga}>
                <div className={styles.caixas_tit_vaga}>
                        <label className={styles.nome_cima} for="nome">Números de Vagas:</label>
                        <input type="number" id={styles.formu} />
                    </div>
                    <div className={styles.remuneracao_vaga}>
                        <label className={styles.nome_cima} for="nome">Remuneração:</label>
                        <input type="number" id={styles.formu} />
                    </div>
                    <div className={styles.caixasenha}>
                        <div className={styles.senha1}>
                            <label className={styles.nome_senha1} for="senha">Minimo*</label>
                            <input type="number" id={styles.senha} name="nome_empresa" />
                        </div>
                        <div className={styles.senha2}>
                            <label className={styles.nome_senha2} for="confir_senha">Máximo*</label>
                            <input type="number" id={styles.senha} name="nome_empresa" />
                        </div>
                    </div>
            </div>
            <div className={styles.bene_vaga}>
                <img src={imagem_beneficio} alt="imagembeneficio"></img>
                <p>Selecione os beneficio</p>
                <div className={styles.categories}>
                <section className={styles.category_section}>
                    <button class={styles.category}>Assistencia Médica</button>
                    <button class={styles.category}>Celular</button>
                    <button class={styles.category}>Vale alimentação / Vale refeição</button>
                </section>
                <section className={styles.category_section}>
                    <button class={styles.category}>Estacionamento</button>
                    <button class={styles.category}>Carro Corporativo</button>
                    <button class={styles.category}>Estacionamento</button>
                    </section>
                <section className={styles.category_section}>
                    <button class={styles.category}>Plano Academico</button>
                    <button class={styles.category}>Dia de Férias Adicionais</button>
                    <button class={styles.category}>Seguro de Vida</button>
                </section>
            </div>
            </div>
            <div className={styles.tipo_vaga}>
                <div className={styles.caixas_tit_vaga}>
                    <label className={styles.nome_cima} for="nome">Mais informações sobre o tipo de vaga:</label>
                    <input type="texto" id={styles.formu} />
                    </div>
                    <div className={styles.categories}>
                <section className={styles.category_section}>
                    <button class={styles.category}>Tempo integral</button>
                    <button class={styles.category}>Meio periodo</button>
                    <button class={styles.category}>Efetivo CLT</button>
                    
                </section>
                <section className={styles.category_section}>
                    <button class={styles.category}>Temporario</button>
                    <button class={styles.category}>Autônomo/PJ</button>
                    <button class={styles.category}>Intermitente</button>
                    
                    </section>
                <section className={styles.category_section}>
                    <button class={styles.category}>Efetivo CLT (Freelance)</button>
                    <button class={styles.category}>Estágio/Trainne</button>
                </section>
            </div>
            </div>
            <div className={styles.maisinfo_vaga}>
            <div className={styles.caixas_tit_vaga}>
                    <label className={styles.nome_cima} for="nome">Mais informações:</label>
                    <input type="texto" id={styles.formu} />
            </div>
            </div>
            <div className={styles.notificacao_vaga}>
                <p>Configuração de notificações</p>
                <div className={styles.caixas_tit_vaga}>
                    <label className={styles.nome_cima} for="nome">Digite o seu email para receber as informações sobre a candidatura:</label>
                    <input type="email" id={styles.formu} />
                    </div>
                    <div className={styles.confirm_email}>
                            <label className={styles.nome_confirm_email} for="senha">Codigo de confirmação de Email</label>
                            <input type="texto" id={styles.input_confirm_email} name="nome_empresa" />
                        </div>
            </div>
            <div className={styles.fim_vaga}>
                Palmeiras
            </div>
        </section>
    )
}
export default Cadastro_Vaga;