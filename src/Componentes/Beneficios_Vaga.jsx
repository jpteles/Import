import styles from '../css/Beneficios_Vaga.module.css'

function Beneficios({
  empresa, local, salario, modo, botao, descricao, descricao2, descricao3, descricao4, descricao5, descricao6, descricao7, descricao8, numero_vagas, imagem1, imagem2
}) {
  return (

    <div className={styles.Beneficios}>
            <h3>{empresa}</h3>
        <div id={styles.infos_vaga}>
            <p>{local}</p>
            <p>{salario}</p>
            <p>{modo}</p>
        </div>
        <div id={styles.candidata_se}>
            <button>{botao}</button>
            <img src={imagem1} alt="pp" />
            <img src={imagem2} alt="pp" />
        </div>
            <p>{descricao}</p>
            <p>{descricao2}</p>
            <p>{descricao3}</p>
        <div id={styles.assistencias}>
            <p>{descricao4}</p>
            <p>{descricao5}</p>
            <p>{descricao6}</p>
            <p>{descricao7}</p>
            <p>{descricao8}</p>
        </div>
            <p>{numero_vagas}</p>
    </div>)
}

export default Beneficios;