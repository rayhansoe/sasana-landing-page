import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import styles from '../styles/NavBar.module.scss'

const Wrapper = dynamic(() => import('./Wrapper'))

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(() => false)

	const openNavBar = () => setIsOpen(curr => !curr)
	const closeNavBar = () => setIsOpen(curr => !curr)

	const router = useRouter()

	return (
		<div className={styles.navbar}>
			<Wrapper type='navWrapper'>
				<Link className={styles.linkLogo} href='/'>
					<a>
						<Image
							src='/images/logo-sasana-digital.webp'
							alt='Logo'
							width={277}
							height={60}
							priority
							layout='fixed'
						/>
					</a>
				</Link>
				<Image
					className={styles.mobileMenu}
					id='mobile-cta'
					src='/icon/burger.svg'
					alt='burger mobile menu'
					width={18.853}
					height={12}
					onClick={openNavBar}
				/>
				<nav className={`${styles.nav} ${isOpen ? styles.menuBtn : ''}`}>
					<Image
						className={styles.mobileMenuExit}
						id='mobile-exit'
						src='/icon/exit.svg'
						alt='exit mobile menu'
						width={20.953}
						height={20.953}
						onClick={closeNavBar}
					/>

					<ul className={styles.navMenu}>
						<li className={`${styles.list} ${router.pathname === '/' ? styles.active : ''}`}>
							<Link href='/'>
								<a className={styles.link}>Beranda</a>
							</Link>
						</li>
						<li className={styles.list}>
							<Link href='#'>
								<a className={styles.link}>Profil</a>
							</Link>
						</li>
						<li className={styles.list}>
							<Link href='#'>
								<a className={styles.link}>Layanan</a>
							</Link>
						</li>
						<li className={styles.list}>
							<Link href='#'>
								<a className={styles.link}>Unduhan</a>
							</Link>
						</li>
						<li className={`${styles.list} ${router.pathname === '/posts' ? styles.active : ''}`}>
							<Link href='/posts'>
								<a className={styles.link}>Posts</a>
							</Link>
						</li>
						<li className={`${styles.list} ${styles.menuCta}`}>
							<Link href='#'>
								<a className={styles.link}>Free Consulting</a>
							</Link>
						</li>
					</ul>
				</nav>
			</Wrapper>
		</div>
	)
}

export default NavBar
