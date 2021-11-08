import styles from '../styles/CardList.module.scss'

const CardList = ({ children }) => {
	return (
		<div data-aos='fade-up' className={styles.cardList}>
			{children}
		</div>
	)
}

export default CardList
