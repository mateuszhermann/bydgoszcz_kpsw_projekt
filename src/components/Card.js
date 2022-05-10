import styles from "./Card.module.css";
function Card(props) {
    return(<div className={styles.cardBackground}>
        <span className={styles.tittle}>{props.tittle}</span>
        <p className={styles.text}>{props.children}</p>
    </div>)
}
export default Card;