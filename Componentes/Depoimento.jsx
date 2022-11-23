import styles from '../css/Depoimento.module.css'
import fotorelato from '../imagens/imgfoto.jpg'


function Depoimento(){
    return(
        <section className={styles.depoimento}>
            <h1>Depoimentos</h1>
            <p>Nossa missão - Entregar condição de vida aos imigrantes/refugiados que fogem dos seus países com medo, e mostrar que conosco eles tem um novo lugar pra chamar de casa. Nossa missão - Entregar condição de vida aos imigrantes/refugiados que fogem dos seus países com medo, e mostrar que conosco eles tem um novo lugar pra chamar de casa</p>
            <div className={styles.relato_video}>    
                <div className={styles.relato}>
                    <div className={styles.relato_foto}>
                        <img src={fotorelato} alt="foto do relato" />
                        <p>“O impacto do Empoderando Refugiadas na minha vida foi a inclusão – minha e das minhas filhas – no mercado de trabalho. No meu caso, me recoloquei apesar da minha deficiência, depois de sobreviver a nhas filhas, que têm paralisia infantil leve.”</p>
                    </div>
                    <p id={styles.nome_relato}>Denisse Franca</p>
                </div>
                <div className={styles.video}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sgJYkT5hd2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
            
        
    )
}
export default Depoimento;