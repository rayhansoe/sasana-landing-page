import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '../styles/Card.module.scss'

const Button = dynamic(() => import('./Button'))

const Card = ({ src, width, height, alt, href, service, title, text, layout }) => {
	return (
		<div className={`${styles.card} ${layout && styles.active}`}>
			<div className={styles.imageContainer}>
				<Image width={width} height={height} src={src} alt={alt} />
			</div>
			<h5 className={styles.headingX5}>{title}</h5>
			<p className={styles.myText}>{text}</p>
			<div className={styles.info}>
				<h6 className={styles.headingX6}>Layanan yang Tersedia:</h6>
				<p className={`${styles.myText} ${styles.v2}`}>{service}</p>
				<Button href={href} type='text' color={layout && '#fff'}>
					Selengkapnya
				</Button>
			</div>
		</div>
	)
}

export default Card
