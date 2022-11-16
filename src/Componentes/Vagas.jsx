import styles from '../css/Vagas.module.css'
import Propostas from '../Componentes/Propostas.jsx';
import Beneficios from './Beneficios_Vaga';
import imagem1 from '../imagens/Vector.png'
import imagem2 from '../imagens/Vector2.png'
import Header_Vagas from '../Componentes/Header_Vagas.jsx'

function Vagas(){
    return(
        <section className={styles.vagas}>
            <Header_Vagas />
            <div className={styles.categories}>
                <section className={styles.category_section}>
                    <button class={styles.category}>Cidade</button>
                    <button class={styles.category}>Vagas</button>
                    <button class={styles.category}>Benefícios</button>
                    <button class={styles.category}></button>
                    <button class={styles.category}></button>
                    <button class={styles.category}></button>
                    <button class={styles.category}></button>
                    <button class={styles.category}></button>
                    <p>Apagar Filtros</p>
                </section>
            </div>
            <div className={styles.propostas}>
                <p className={styles.num_vagas}>3.271 Vagas de Emprego de Programador/ Desenvolvedor em São Paulo</p>
        
                <Propostas cargo="Analista De Sistema SAP" dia="hoje" empresa="Oracle" local="São Paulo - SP, a 21,3 Km de Você " modo="Presencial" descricao="Suporte na construção do sistema, implementação, tecnicas e melhorias. Entender e realizar configuração." />

                <Propostas cargo="Analista De Sistema SAP" dia="hoje" empresa="Oracle" local="São Paulo - SP, a 21,3 Km de Você " modo="Presencial" descricao="Suporte na construção do sistema, implementação, tecnicas e melhorias. Entender e realizar configuração." />
                
                <Propostas cargo="Analista De Sistema SAP" dia="hoje" empresa="Oracle" local="São Paulo - SP, a 21,3 Km de Você " modo="Presencial"
                descricao="Suporte na construção do sistema, implementação, tecnicas e melhorias. Entender e realizar configuração." />
            </div>
            
            <div className={styles.detalhe_vaga}>
                <Beneficios empresa="Oracle" local="São Paulo - SP, a 21,3 Km de Você" salario="RS 10.000,00 a R$ 12.000,00 (Bruto mensal)" modo="Presencial" 
                descricao="Suporte SAP funcional no module SD"
                botao="Candidata-se"
                imagem1={imagem1} 
                imagem2={imagem2}
                descricao2="Suporte SAP funcional no module SD implação de notas tecnicas melhoras. Entender realizar configuração relacionados a calculo de valores de impostos no produto nas configurações Sap Localização Brasn (esquentas)."
                descricao3="Diferencial ter tudo em industria"
                descricao4="Beneficios:"
                descricao5="- Assistência médica"
                descricao6="- Assistência médica"
                descricao7="- Assistência médica"
                descricao8="- Assistência médica"
                numero_vagas="Número de vagas: 1" />
            </div>
        </section>
    )
}
export default Vagas;