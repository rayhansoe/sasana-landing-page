import styles from './Wrapper.module.scss'

const index = ({ children, type }) => {
	return (
		<div className={`${styles.container} ${type === 'navWrapper' && styles.navWrapper}`}>
			{children}
		</div>
	)
}

export default index
