import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '../styles/CallBack.module.scss'

const Section = dynamic(() => import('./Section'))
const Wrapper = dynamic(() => import('./Wrapper'))
const Button = dynamic(() => import('./Button'))

const CallBack = () => {
	return (
		<Section>
			<Wrapper type='callBackWrapper'>
				<div className={styles.contents}>
					<div className={styles.backgroundImage}>
						<Image
							src='/images/CallBack-image.webp'
							alt='image background component'
							width={1920}
							height={335}
							layout='fixed'
							placeholder='blur'
							blurDataURL='/images/CallBack-image.webp'
						/>
					</div>
					<div data-aos='fade-up' className={styles.content}>
						<div className={styles.leftContent}>
							<h2 className={styles.headingX2}>
								Segera mulai perjalanan bisnis Anda dalam bertransformasi.
							</h2>
							<p className={styles.myText}>
								Sasana Digital akan dengan senang hati melayani Anda dan membantu bisnis Anda
								bertumbuh di tengah ketatnya persaingan bisnis digital saat ini.
							</p>
						</div>
						<Button href='#'>Training Bersama Kami</Button>
					</div>
				</div>
			</Wrapper>
		</Section>
	)
}

export default CallBack
