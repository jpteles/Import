import styles from '../css/Sobre_Nos.module.css'

function Sobre_Nos(){
    return(
        <section className={styles.Sobre_Nos}>
            <h1>Quem Somos</h1>
            <div className={styles.contexto}>
                <p>
                A atual crise migratória que assola o mundo é um dos principais problemas dos últimos anos, devido a guerras, catástrofes climáticas recorrentes ou colapsos políticos e econômicos, milhares de pessoas abandonam suas casas para tentar a sorte em um novo lugar, normalmente com língua, cultura, clima, e diversas outras diferenças.
                <br />
                Essas pessoas que estão migrando em busca de algum refúgio estão passando por problemas gravíssimos como desnutrição e doenças, além de estarem com o psicológico extremamente abalado devido a todo o contexto emocional de abandonar uma vida inteira. 
                Nesse contexto, surgiu a ideia de criar uma plataforma web que de alguma forma auxilie essas pessoas a começar a construir uma nova vida nesse novo lugar.
                </p>
            </div>
            <div className={styles.import_futuro}>
                <div className={styles.img_import_futuro}>
                    imagem
                </div>
                <div className={styles.texto_import_futuro}>
                    <h1>Import</h1>
                    <p id={styles.textoimport}>import é uma plataforma que visa reúnir pessoas que verdadeiramente se importam com o problema da crise migratória</p>
                    <h1>Visão de futuro</h1>
                    <p id={styles.textofuturo}>Pensando no futuro próximo, nós queremos ajudar primeiramente os Refugiados que chegam na Capital de São Paulo, se tornando referência na cidade. Logo depois expandir para os outros estados e locais perto das fronteiras, sendo referência no Brasil e ser reconhecido por ajudar milhares de refugiados com necessidades.     
                    </p>
                    <button className={styles.botao}> Seja Voluntário </button>
                </div>  
            </div>
        </section>
    )
}
export default Sobre_Nos;