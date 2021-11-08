import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import styles from '../styles/Card.module.scss'

const Button = dynamic(() => import('./Button'))

const Card = ({ src, width, height, alt, href, service, title, text, type }) => {
	const [isHover, setIsHover] = useState(() => false)

	const handleMouseEnter = () => setIsHover(() => true)
	const handleMouseLeave = () => setIsHover(() => false)

	return (
		<>
			{type === 'activity' ? (
				<div
					className={`${styles.card} ${type && styles.activity}`}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<div className={styles.image}>
						<Image src={src} alt={alt} layout='fill' placeholder='blur' blurDataURL={src} />
					</div>
					<div className={styles.desc}>
						<h5 className={styles.headingX5}>{title}</h5>
						<p className={styles.myText}>{text}</p>
					</div>
				</div>
			) : type === 'post' ? (
				<div
					className={`${styles.card} ${styles.post}`}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Link href={href}>
						<a className={styles.link}>
							<h5 className={styles.headingX5}>{title}</h5>
						</a>
					</Link>
					<div className={styles.data} dangerouslySetInnerHTML={{ __html: text }}></div>
					<Link href={href}>
						<a className={styles.link}>See more</a>
					</Link>
				</div>
			) : (
				<div
					className={styles.card}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<div className={styles.imageContainer}>
						<Image
							width={width}
							height={height}
							src={src}
							alt={alt}
							placeholder='blur'
							blurDataURL={src}
						/>
					</div>
					<h5 className={styles.headingX5}>{title}</h5>
					<p className={styles.myText}>{text}</p>
					<div className={styles.info}>
						<h6 className={styles.headingX6}>Layanan yang Tersedia:</h6>
						<p className={`${styles.myText} ${styles.v2}`}>{service}</p>
						<Button href={href} type='text' color={isHover ? '#fff' : false}>
							Selengkapnya
						</Button>
					</div>
				</div>
			)}
		</>
	)
}

export default Card
