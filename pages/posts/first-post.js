import Link from 'next/link'

const FirstPost = () => {
	return (
		<div>
			<h1>Hello word</h1>
			<Link href='/'>
				<a>Home</a>
			</Link>
		</div>
	)
}

export default FirstPost
