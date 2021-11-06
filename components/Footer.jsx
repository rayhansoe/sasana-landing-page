import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import styles from '../styles/Footer.module.scss'

const Wrapper = dynamic(() => import('./Wrapper'))

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Wrapper type='footerWrapper'>
				<div className={styles.content}>
					<div className={styles.profile}>
						<Image
							src='/images/logo-sasana-putih-07.webp'
							alt='logo sasana putih'
							width={341}
							height={54}
							layout='fixed'
							placeholder='blur'
							blurDataURL='/images/logo-sasana-putih-07.webp'
							priority
						/>
						<div className={styles.footerContent}>
							<div className={styles.leftContent}>
								<h3 className={styles.headingX3}>PT. Sasana Solusi Digital</h3>
								<p className={styles.myText}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper et lectus
									consequat neque, luctus mi non id. Nibh accumsan, sapien pellentesque sit
									elementum libero urna diam. Ipsum vitae dolor tellus turpis ullamcorper rutrum
									faucibus. Consectetur id neque quisque dignissim consectetur condimentum urna
									tellus arcu.
								</p>
								<ul className={styles.socialMedia}>
									<li className={styles.sc1}>
										<Link href='#'>
											<a className={styles.link}>
												<Image
													src='/icon/ant-design_instagram-filled.svg'
													alt='instagram icon'
													width={24}
													height={24}
												/>
											</a>
										</Link>
									</li>
									<li className={styles.sc2}>
										<Link href='#'>
											<a className={styles.link}>
												<Image
													src='/icon/akar-icons_linkedin-fill.svg'
													alt='linkedin icon'
													width={24}
													height={24}
												/>
											</a>
										</Link>
									</li>
									<li className={styles.sc3}>
										<Link href='#'>
											<a className={styles.link}>
												<Image
													src='/icon/clarity_email-solid.svg'
													alt='email icon'
													width={24}
													height={24}
												/>
											</a>
										</Link>
									</li>
									<li className={styles.sc4}>
										<Link href='#'>
											<a className={styles.link}>
												<Image
													src='/icon/brandico_facebook-rect.svg'
													alt='facebook icon'
													width={24}
													height={24}
												/>
											</a>
										</Link>
									</li>
								</ul>
							</div>
							<div className={styles.midContent}>
								<h5 className={styles.headingX5}>CONTACT US</h5>
								<div className={styles.location}>
									<p>PT. Sasana Solusi Digital</p>
									<p>Office No.3 Point LAB Co-Working Space</p>
									<p>Graha Pos Indonesia, Lt. 2 Blok C</p>
									<p>Jl. Banda</p>
									<p>Bandung 40115</p>
									<p>Email: cs@sasanadigital.com</p>
									<p>WhatsApp: 0811 2141 053</p>
									<p>Telepon: 022 2054 1053</p>
								</div>
							</div>
							<div className={styles.rightContent}>
								<h5 className={styles.headingX5}>NEWSLETTER</h5>
								<h5 className={styles.headingX5}>BLOG</h5>
								<h5 className={styles.headingX5}>CARRIER</h5>
							</div>
						</div>
					</div>
					<div className={styles.copyRight}>Copyright 2021 - PT Sasana Solusi Digital</div>
				</div>
			</Wrapper>
		</footer>
	)
}

export default Footer
