import styles from '../../styles/app.module.css'
const Titulo = ({str}) => { 
    return (
    <h1 className={styles.titulo}>{str}</h1>
    );
}

export default Titulo;