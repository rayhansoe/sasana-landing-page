import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Button.module.scss'

const Button = ({ href, children, type, color }) => {
	return (
		<div
			className={`${styles.button} ${
				type === 'text'
					? styles.text
					: type === 'outline'
					? styles.outline
					: type === 'course'
					? styles.course
					: type === 'disable'
					? styles.disable
					: ''
			}`}>
			<Link href={href}>
				<a className={styles.link}>
					<p style={{ color: `${color && color}` }}>{children}</p>
					{type === 'outline' || type === 'course' || type === 'disable' ? (
						''
					) : (
						<Image
							className={styles.arrow}
							src={
								type === 'text' && !color
									? '/icon/right-arrow-v2.svg'
									: color === '#fff'
									? '/icon/right-arrow-v3.svg'
									: '/icon/right-arrow.svg'
							}
							alt='right arrow'
							width={16}
							height={16}
							placeholder='blur'
							blurDataURL={
								type === 'text' && !color
									? '/icon/right-arrow-v2.svg'
									: color === '#fff'
									? '/icon/right-arrow-v3.svg'
									: '/icon/right-arrow.svg'
							}
							priority
						/>
					)}
				</a>
			</Link>
		</div>
	)
}

export default Button
