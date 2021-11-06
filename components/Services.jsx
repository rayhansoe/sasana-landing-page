import dynamic from 'next/dynamic'
import styles from '../styles/Services.module.scss'

const Wrapper = dynamic(() => import('./Wrapper'))
const Card = dynamic(() => import('./Card'))
const CardList = dynamic(() => import('./CardList'))

const Services = () => {
	return (
		<section className={styles.section}>
			<Wrapper type='servicesWrapper'>
				<div className={styles.content}>
					<h1 className={styles.headingX1}>Layanan Transformasi Digital</h1>
					<p className={styles.myText}>
						Mulai perjalanan bisnis Anda dalam bertransformasi melalui 3 layanan utama kami.
					</p>
					<CardList>
						<Card
							src='/images/LOGO MARKETING STUDIO FINAL FIX-01 1.webp'
							width={276}
							height={138}
							alt='logo sasana marketing studio'
							title='Digital Marketing'
							text='Maksimalkan peran dan strategi Digital Marketing untuk semua kegiatan pemasaran
								dalam bisnis Anda.'
							service='Konsultasi | Training'
							href='#'
						/>
						<Card
							src='/images/logo empowering-01 1.webp'
							width={293}
							height={145}
							alt='logo sasana empowering'
							title='Digital Solution'
							text='Tingkatkan kinerja perusahaan melalui layanan Digital Solution untuk Produktivitas Bisnis yang berkelanjutan.'
							service='Konsultasi | Training'
							href='#'
							layout='active'
						/>
						<Card
							src='/images/LOGO SASANA DESIGN STUDIO-01.webp'
							width={236}
							height={81}
							alt='logo sasana design studio'
							title='Digital Media Tools'
							text='Optimalkan peran Desain Visual dalam kegiatan pemasaran di bisnis Anda melalui layanan Digital Media Tools.'
							service='UI Design | Graphic Design | Social Media'
							href='#'
						/>
					</CardList>
				</div>
			</Wrapper>
		</section>
	)
}

export default Services
