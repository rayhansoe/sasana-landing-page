import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '../styles/Hero.module.scss'

const Wrapper = dynamic(() => import('./Wrapper'))
const Button = dynamic(() => import('./Button'))

export default function Hero() {
	return (
		<section className={styles.section}>
			<Wrapper>
				<div className={styles.leftContent}>
					<h1 className={styles.headingX1}>
						Akselerasikan Bisnis Anda Melalui Pemanfaatan Teknologi Digital
					</h1>
					<p className={styles.myText}>
						Berangkat dari berbagai permasalahan digital yang sering kali dihadapi suatu bisnis,
						<br />
						Sasana Digital berkomitmen menghadirkan sebuah solusi efektif melalui Transformasi
						Digital.
					</p>
					<Button href='#'>Pelajari Selengkapnya ️</Button>
				</div>
				<div className={styles.rightContent}>
					<Image
						src='/images/hero-image.png'
						alt='hero image'
						width={961}
						height={981}
						quality={50}
						placeholder='blur'
						blurDataURL='/images/hero-image.png'
						priority
					/>
				</div>
			</Wrapper>
		</section>
	)
}
