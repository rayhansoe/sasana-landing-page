import dynamic from 'next/dynamic'
import styles from '../styles/Layout.module.scss'

const NavBar = dynamic(() => import('./NavBar'))
const Footer = dynamic(() => import('./Footer'))

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
