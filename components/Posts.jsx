import dynamic from 'next/dynamic'
import styles from '../styles/Posts.module.scss'

const Wrapper = dynamic(() => import('./Wrapper'))
const CardList = dynamic(() => import('./CardList'))
const Card = dynamic(() => import('./Card'))

const Posts = ({ posts, type }) => {
	const jsxPosts = posts.map(post => {
		return (
			<Card
				type='post'
				title={post.title.rendered}
				href={`/posts/${post.slug}`}
				text={post.excerpt.rendered}
				key={post.id}
			/>
		)
	})
	return (
		<div className='container'>
			<Wrapper type='post'>
				<h1 className={`${styles.headingX1} ${type ? styles.home : ''}`}>Sasana Digital Posts</h1>
				<h2 className={`${styles.headingX5} ${type ? styles.home : ''}`}>Our blog posts</h2>
				<CardList>{jsxPosts}</CardList>
			</Wrapper>
		</div>
	)
}

export default Posts
