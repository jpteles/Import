import styles from '../css/Propostas.module.css'

function Propostas({
  cargo, dia, empresa, local, modo, descricao
}) {
  return (

    <div className={styles.Propostas}>
        <div className={styles.cargo_dia}>
            <h1>{cargo}</h1>
            <p>{dia}</p>
        </div>
            <h3>{empresa}</h3>
        <div className={styles.local_modo}>
            <p>{local}</p>
            <p id={styles.modo}>{modo}</p>
        </div>
            <p>{descricao}</p>
    </div>)
}

export default Propostas;