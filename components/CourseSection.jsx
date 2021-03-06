import dynamic from 'next/dynamic'
import Image from 'next/image'
import styles from '../styles/Course.module.scss'

const Button = dynamic(() => import('./Button'))
const Wrapper = dynamic(() => import('./Wrapper'))
const CardList = dynamic(() => import('./CardList'))

const CourseSection = () => {
	return (
		<section className={styles.section}>
			<Wrapper type='servicesWrapper'>
				<div className={styles.content}>
					<div className={styles.head}>
						<h1 className={styles.headingX1}>Acara & Pelatihan Sasana Digital</h1>
						<p className={styles.myText}>
							Berbagai kegiatan menarik Sasana Digital yang dapat segera Anda ikuti.
						</p>
					</div>
					<Button type='outline' href='#'>
						See More Event
					</Button>
					<CardList>
						<div className={styles.card}>
							<div className={styles.image}>
								<Image
									src='/images/COVER EVENT FOR WEB-02.webp'
									alt='thumbnail sasana tokopedia course'
									layout='fill'
									placeholder='blur'
									blurDataURL='/images/COVER EVENT FOR WEB-02.webp'
								/>
							</div>
							<div className={styles.rating}>
								<Image src='/images/Rating.webp' width={152} height={28} alt='score' />
								<p className={styles.score}>4.85/5</p>
							</div>
							<h5 className={styles.headingX5}>Marketplace Hack : Tokopedia</h5>
							<div className={styles.courseDetail}>
								<div className={styles.detail}>
									<div className={styles.iconWrapper}>
										<Image
											layout='fill'
											placeholder='blur'
											blurDataURL='/icon/clock.svg'
											alt='clock icon'
											src='/icon/clock.svg'
										/>
									</div>
									<p className={styles.textLight}>27-Aug-2021 | 12.00 AM</p>
								</div>
								<div className={styles.detail}>
									<div className={styles.iconWrapper}>
										<Image
											layout='fill'
											alt='map pin icon'
											placeholder='blur'
											blurDataURL='/icon/map-pin.svg'
											src='/icon/map-pin.svg'
										/>
									</div>
									<p className={styles.textLight}>UDEMY</p>
								</div>
								<div className={styles.detail}>
									<div className={styles.iconWrapper}>
										<Image
											layout='fill'
											alt='sasana icon'
											placeholder='blur'
											blurDataURL='/icon/Frame 49.png'
											src='/icon/Frame 49.png'
										/>
									</div>
									<p className={styles.textLight}>By Sasana Digital</p>
								</div>
							</div>
							<Button type='course' href='#'>
								PAID COURSE
							</Button>
						</div>
						<div className={styles.card}>
							<div className={styles.image}>
								<Image
									src='/images/COVER EVENT FOR WEB-03.webp'
									alt='thumbnail sasana shopee course'
									layout='fill'
									placeholder='blur'
									blurDataURL='/images/COVER EVENT FOR WEB-03.webp'
								/>
							</div>
							<div className={styles.rating}>
								<Image
									placeholder='blur'
									blurDataURL='/images/Rating 5.webp'
									src='/images/Rating 5.webp'
									width={152}
									height={28}
									alt='score'
								/>
								<p className={styles.score}>5/5</p>
							</div>
							<h5 className={styles.headingX5}>Marketplace Hack : Shopee</h5>
							<div className={styles.courseDetail}>
								<div className={styles.detail}>
									<div className={styles.iconWrapper}>
										<Image
											layout='fill'
											placeholder='blur'
											blurDataURL='/icon/clock.svg'
											alt='clock icon'
											src='/icon/clock.svg'
										/>
									</div>
									<p className={styles.textLight}>27-Aug-2021 | 12.00 AM</p>
								</div>
								<div className={styles.detail}>
									<div className={styles.iconWrapper}>
										<Image
											layout='fill'
											alt='map pin icon'
											placeholder='blur'
											blurDataURL='/icon/map-pin.svg'
											src='/icon/map-pin.svg'
										/>
									</div>
									<p className={styles.textLight}>UDEMY</p>
								</div>
								<div className={styles.detail}>
									<div className={styles.iconWrapper}>
										<Image
											layout='fill'
											alt='sasana icon'
											placeholder='blur'
											blurDataURL='/icon/Frame 49.png'
											src='/icon/Frame 49.png'
										/>
									</div>
									<p className={styles.textLight}>By Sasana Digital</p>
								</div>
							</div>
							<Button type='course' href='#'>
								PAID COURSE
							</Button>
						</div>
						<div className={styles.card}>
							<div className={styles.image}>
								<div className={styles.info}>BELUM TERSEDIA</div>
								<Image
									src='/images/COVER EVENT FOR WEB-01.webp'
									alt='thumbnail digital marketing course'
									layout='fill'
									placeholder='blur'
									blurDataURL='/images/COVER EVENT FOR WEB-01.webp'
								/>
							</div>
							<div className={styles.rating}>
								<Image
									placeholder='blur'
									blurDataURL='/images/Rating 0.webp'
									src='/images/Rating 0.webp'
									width='152px'
									height='28px'
									alt='score'
								/>
								<p className={styles.score}>0</p>
							</div>
							<h5 className={styles.headingX5}>Digital Marketing untuk Bisnis UMKM</h5>
							<div className={styles.courseDetail}>
								<div className={styles.detail}>
									<div className={styles.iconWrapper}>
										<Image
											layout='fill'
											placeholder='blur'
											blurDataURL='/icon/clock.svg'
											alt='clock icon'
											src='/icon/clock.svg'
										/>
									</div>
									<p className={styles.textLight}>27-Aug-2021 | 12.00 AM</p>
								</div>
								<div className={styles.detail}>
									<div className={styles.iconWrapper}>
										<Image
											layout='fill'
											alt='map pin icon'
											placeholder='blur'
											blurDataURL='/icon/map-pin.svg'
											src='/icon/map-pin.svg'
										/>
									</div>
									<p className={styles.textLight}>UDEMY</p>
								</div>
								<div className={styles.detail}>
									<div className={styles.iconWrapper}>
										<Image
											layout='fill'
											alt='sasana icon'
											placeholder='blur'
											blurDataURL='/icon/Frame 49.png'
											src='/icon/Frame 49.png'
										/>
									</div>
									<p className={styles.textLight}>By Sasana Digital</p>
								</div>
							</div>
							<Button type='disable' href='#'>
								COMING SOON
							</Button>
						</div>
					</CardList>
				</div>
			</Wrapper>
		</section>
	)
}

export default CourseSection
