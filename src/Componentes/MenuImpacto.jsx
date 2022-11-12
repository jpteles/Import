import styles from '../css/MenuImpacto.module.css'

function Menu_impacto({
  img, titulo, descricao
}) {
  return (

    <div className={styles.impacto}>
      <img src={img} alt="pessoas" />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>)
}

export default Menu_impacto;
