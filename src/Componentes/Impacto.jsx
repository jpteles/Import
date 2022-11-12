import styles from '../css/Impacto.module.css'
import imagem from '../imagens/Char 12.png'


function Impacto(){
    return(
        <section className={styles.impacto}>
            <h1 className={styles.titulo_impacto}>Como Geramos Impacto</h1>
            
            <div className={styles.container}>
            <div id={styles.propaganda}>
                <img src={imagem} alt="imagem" />
                <h3>Difusão e propaganda nas redes</h3>
                <p>Analisando a necessidade urgente de impactar mais pessoas com o problema da crise migratória no Brasil, fazemos um trabalho ativo de difusão de informações</p>
                </div>
            </div>
            <div className={styles.container}>
            <div id={styles.trabalho_voluntario}>
                <img src={imagem} alt="imagem" />
                <h3>Trabalho voluntário</h3>
                <p>Existem muitas pessoas que assim como nós, realmente se importam. Essas pessoas nos auxiliam a manter o Import vivo.</p>
                </div>
            </div>
            <div className={styles.container}>
            <div id={styles.aulas}>
                <img src={imagem} alt="imagem" />
                <h3>Aulas de comunicação e português</h3>
                <p>Auxiliaremos os imigrantes a aprenderem o português comunicativo, para que se adaptem mais rapidamente a essa nova realidade</p>
                </div>
            </div>
            <div className={styles.container}>
            <div id={styles.pesquisa}>
                <img src={imagem} alt="imagem" />
                <h3>Trabalho de pesquisa</h3>
                <p>A cada dia mais pessoas chegam, e para atender melhor suas necessidades e anseios precisamos estar constantemente em contato com essas pessoas, fazendo pesquisas de campo constantes para encontrar formas de ajudar.</p>
                </div>
            </div>
            <div className={styles.container}>
            <div id={styles.socio_emocional}>
                <img src={imagem} alt="imagem" />
                <h3>Apoio Socio-emocional</h3>
                <p>Muitos imigrantes sofrem traumas durante o processo de busca por refúgio, por isso contamos com apoio profissional para auxiliar essas pessoa.</p>
                </div>
            </div>
            <div className={styles.container}>
            <div id={styles.documentacao}>
                <img src={imagem} alt="imagem" />
                <h3>DOcumentação e politicas públicas</h3>
                <p>Para que os imigrantes consigam acesso a serviços sociais de auxilio, eles precisam de documentação para legalidade, a Import trabalha duro para que esse processo seja rapído e fácil.</p>
                </div>
            </div>
        </section>
        
    )
}
export default Impacto;