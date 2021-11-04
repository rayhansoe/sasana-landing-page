import dynamic from 'next/dynamic'
import styles from './Layout.module.scss'

const NavBar = dynamic(() => import('../Navbar'))

const index = ({ children }) => {
	return (
		<div className={styles.container}>
			<NavBar />
			<main>{children}</main>
		</div>
	)
}

export default index
