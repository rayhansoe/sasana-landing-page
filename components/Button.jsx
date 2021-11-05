import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Button.module.scss'

const Button = ({ href, children }) => {
	return (
		<div className={styles.button}>
			<Link href={href}>
				<a className={styles.link}>
					<p>{children}</p>
					<Image
						className={styles.arrow}
						src='/icon/right-arrow.svg'
						alt='right arrow'
						width={24}
						height={24}
					/>
				</a>
			</Link>
		</div>
	)
}

export default Button
