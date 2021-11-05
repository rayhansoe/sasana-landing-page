import styles from '../styles/CardList.module.scss'

const CardList = ({ children }) => {
	return <div className={styles.cardList}>{children}</div>
}

export default CardList
