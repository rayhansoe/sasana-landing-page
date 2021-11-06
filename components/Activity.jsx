import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '../styles/Activity.module.scss'

const Card = dynamic(() => import('./Card'))
const Wrapper = dynamic(() => import('./Wrapper'))
const CardList = dynamic(() => import('./CardList'))

const Activity = () => {
	return (
		<section className={styles.section}>
			<Wrapper type='servicesWrapper'>
				<div className={styles.content}>
					<div className={styles.desc}>
						<h1 className={styles.headingX1}>Aktivitas Sasana Digital</h1>
						<p className={styles.myText}>
							Berikut dokumentasi kegiatan yang pernah kami selenggarakan baik bersama instansi
							negara maupun swasta.
						</p>
					</div>
					<CardList>
						<Card
							type='activity'
							src='/images/activity 1.webp'
							width={313}
							height={255}
							alt='sasana activity'
							title={
								<>
									<span>Community Training</span> <br />
									Kementrian Kelautan dan Perikanan
								</>
							}
							text='Deskripsi kegiatan yang akan diadakan'
						/>
						<Card
							type='activity'
							src='/images/activity 2.webp'
							width={313}
							height={255}
							alt='sasana activity'
							layout='active'
							title={
								<>
									<span>Public Training</span> <br />
									Digital Marketing Fundamental
								</>
							}
							text='Deskripsi kegiatan yang akan diadakan'
						/>
						<Card
							type='activity'
							src='/images/activity 3.webp'
							width={313}
							height={255}
							alt='sasana activity'
							title={
								<>
									<span>In-House Training</span> <br />
									PT Gerbang Sinergi Prima
								</>
							}
							text='Deskripsi kegiatan yang akan diadakan'
						/>
					</CardList>
					<div className={styles.indicator}>
						<Image src='/icon/Rectangle-104.svg' alt='indicator carousel' width={49} height={8} />
						<Image src='/icon/Rectangle-105.svg' alt='indicator carousel' width={49} height={8} />
						<Image src='/icon/Rectangle-105.svg' alt='indicator carousel' width={49} height={8} />
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default Activity
