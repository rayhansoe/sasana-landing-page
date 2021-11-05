import dynamic from 'next/dynamic'
import styles from '../styles/Layout.module.scss'

const NavBar = dynamic(() => import('./NavBar'))

const index = ({ children }) => {
	return (
		<div className={styles.container}>
			<NavBar />
			<main>{children}</main>
		</div>
	)
}

export default index
