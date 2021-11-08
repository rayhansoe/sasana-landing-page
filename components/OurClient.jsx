import dynamic from 'next/dynamic'
import Image from 'next/image'
import styles from '../styles/OurClient.module.scss'

const Wrapper = dynamic(() => import('../components/Wrapper'))

const OurClient = () => {
	return (
		<section className={styles.section}>
			<Wrapper type='clientWrapper'>
				<h1 className={styles.headingX1}>Klien Hebat Sasana Digital</h1>
				<p className={styles.myText}>
					Klien Nasional hingga Internasional telah mempercayakan kami <br /> sebagai partner yang
					tepat dalam bertransformasi.
				</p>
				<div data-aos='fade-up' className={styles.carousel}>
					<div className={styles.arrow}>
						<Image
							priority
							layout='fill'
							src='/icon/arrow-square-left.svg'
							alt='arrow square left'
						/>
					</div>
					<div className={styles.cardList}>
						<div className={styles.card}>
							<Image
								layout='fixed'
								priority
								src='/images/Logo_of_the_Ministry_of_Maritime_Affairs_and_Fisheries_of_the_Republic_of_Indonesia.webp'
								alt='logo client'
								placeholder='blur'
								blurDataURL='/images/Logo_of_the_Ministry_of_Maritime_Affairs_and_Fisheries_of_the_Republic_of_Indonesia.webp'
								width={110}
								height={114}
							/>
						</div>
						<div className={styles.card}>
							<Image
								layout='fixed'
								priority
								src='/images/1200px-Pegadaian_logo_(2013).webp'
								alt='logo client'
								placeholder='blur'
								blurDataURL='/images/1200px-Pegadaian_logo_(2013).webp'
								width={146}
								height={76}
							/>
						</div>
						<div className={styles.card}>
							<Image
								layout='fixed'
								priority
								src='/images/adetex 1.webp'
								alt='logo client'
								placeholder='blur'
								blurDataURL='/images/adetex 1.webp'
								width={136}
								height={55}
							/>
						</div>
						<div className={styles.card}>
							<Image
								layout='fixed'
								priority
								src='/images/murata 1.webp'
								alt='logo client'
								placeholder='blur'
								blurDataURL='/images/murata 1.webp'
								width={134}
								height={46}
							/>
						</div>
						<div className={styles.card}>
							<Image
								layout='fixed'
								priority
								src='/images/KMC_373266 1.webp'
								alt='logo client'
								placeholder='blur'
								blurDataURL='/images/KMC_373266 1.webp'
								width={129}
								height={86}
							/>
						</div>
						<div className={styles.card}>
							<Image
								layout='fixed'
								priority
								src='/images/marwah-logo 1.webp'
								alt='logo client'
								placeholder='blur'
								blurDataURL='/images/marwah-logo 1.webp'
								width={150}
								height={150}
							/>
						</div>
					</div>
					<div className={styles.arrow}>
						<Image
							priority
							layout='fill'
							src='/icon/arrow-square-right.svg'
							alt='arrow square right'
						/>
					</div>
				</div>
				<div data-aos='fade' className={styles.indicator}>
					<Image src='/icon/Rectangle-104.svg' alt='indicator carousel' width={49} height={8} />
					<Image src='/icon/Rectangle-105.svg' alt='indicator carousel' width={49} height={8} />
					<Image src='/icon/Rectangle-105.svg' alt='indicator carousel' width={49} height={8} />
				</div>
			</Wrapper>
		</section>
	)
}

export default OurClient
