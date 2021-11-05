import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '../styles/WhySection.module.scss'

const Wrapper = dynamic(() => import('./Wrapper'))

const WhySection = () => {
	return (
		<section className={styles.section}>
			<Wrapper type='servicesWrapper'>
				<div className={styles.content}>
					<div className={styles.head}>
						<h1 className={styles.headingX1}>Kenapa Memilih Sasana Digital?</h1>
						<p className={styles.myText}>
							Karena kami berkomitmen menghadirkan pelayanan terbaik bagi klien dengan alasan:
						</p>
					</div>
					<div className={styles.whyContent}>
						<div className={styles.image}>
							<Image
								src='/images/Image Carousel.png'
								alt='image carousel placeholder'
								layout='fill'
							/>
						</div>
						<div className={styles.contents}>
							<div className={styles.desc}>
								<h5 className={styles.headingX5}>One Stop Digital Solution</h5>
								<p className={styles.myText}>
									Layanan kami menawarkan solusi digital yang tuntas dan tepat sasaran dalam
									membantu bisnis klien bertumbuh. Mulai dari tahap awal perencanaan hingga akhir
									evaluasi.
								</p>
							</div>
							<div className={styles.desc}>
								<h5 className={styles.headingX5}>Layanan yang Terintegrasi</h5>
								<p className={styles.myText}>
									Layanan yang kami hadirkan telah mengintegrasikan antara penggunaan teknologi
									terkini dengan sumber daya manusia yang ahli di bidangnya.
								</p>
							</div>
							<div className={styles.desc}>
								<h5 className={styles.headingX5}>Terbukti & Terpercaya</h5>
								<p className={styles.myText}>
									Layanan kami telah dipercaya oleh puluhan bisnis di Indonesia hingga mancanegara
									yang dibuktikan dengan adanya portofolio dari setiap kegiatan.
								</p>
							</div>
							<div className={styles.desc}>
								<h5 className={styles.headingX5}>Prinsip Kerja</h5>
								<p className={styles.myText}>
									Prinsip kerja yang kami pegang berlandaskan pada sikap Profesionalisme dan
									Integritas demi memberikan pelayanan terbaik kepada klien.
								</p>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}

export default WhySection
