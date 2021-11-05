import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Button.module.scss'

const Button = ({ href, children, type, color }) => {
	return (
		<div className={`${styles.button} ${type === 'text' ? styles.text : ''}`}>
			<Link href={href}>
				<a className={styles.link}>
					<p style={{ color: `${color && color}` }}>{children}</p>
					{console.log(color)}
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
					/>
				</a>
			</Link>
		</div>
	)
}

export default Button
