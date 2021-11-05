import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '../styles/CallBack.module.scss'

const Section = dynamic(() => import('./Section'))
const Wrapper = dynamic(() => import('./Wrapper'))

const CallBack = () => {
	return (
		<Section>
			<Wrapper type='callBackWrapper'>
				<div className={styles.backgroundImage}>
					<Image
						src='/images/Segera mulai perjalanan bisnis anda.png'
						alt='image background component'
						width={1920}
						height={335}
						priority
					/>
				</div>
				<div className={styles.content}>
					<div className={styles.leftContent}>
						<h2 className={styles.headingX2}>
							Segera mulai perjalanan bisnis Anda dalam bertransformasi.
						</h2>
						<p className={styles.myText}>
							Sasana Digital akan dengan senang hati melayani Anda dan membantu bisnis Anda
							bertumbuh di tengah ketatnya persaingan bisnis digital saat ini.
						</p>
					</div>
					<div className={styles.rightContent}>
						<Link href='#'>
							<a className={styles.link}>
								<p>Training Bersama Kami </p>
								<Image
									style={{ width: '24px', height: '24px' }}
									src='/icon/right-arrow.svg'
									alt='right arrow'
									width={24}
									height={24}
								/>
							</a>
						</Link>
					</div>
				</div>
			</Wrapper>
		</Section>
	)
}

export default CallBack
