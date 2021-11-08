import styles from '../styles/Wrapper.module.scss'

const Wrapper = ({ children, type }) => {
	return (
		<div
			className={`${styles.container} ${
				type === 'navWrapper'
					? styles.navWrapper
					: type === 'footerWrapper'
					? styles.footerWrapper
					: type === 'callBackWrapper'
					? styles.callBackWrapper
					: type === 'clientWrapper'
					? styles.clientWrapper
					: type === 'servicesWrapper'
					? styles.servicesWrapper
					: type === 'hero'
					? styles.hero
					: type === 'post'
					? styles.post
					: ''
			}`}>
			{children}
		</div>
	)
}

export default Wrapper
