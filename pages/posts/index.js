//index.js

import Head from 'next/head'
import dynamic from 'next/dynamic'

import { getPosts } from '../../utils/wordpress'

const Wrapper = dynamic(() => import('../../components/Wrapper'))
const CardList = dynamic(() => import('../../components/CardList'))
const Card = dynamic(() => import('../../components/Card'))

export default function PagePost({ posts }) {
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
		<>
			<Head>
				<title>Sasana Digital Posts</title>
				<meta name='description' content='Keep up to date with the latest trends in tech' />
				<link rel='icon' href='/favicon.ico' />
				{/* You can add more metadata here, like open graph tags for social media, etc */}
			</Head>

			<div className='container'>
				<Wrapper type='post'>
					<h1 className='headingX1'>Sasana Digital Posts</h1>
					<h2 className='pb-3'>Our blog posts</h2>
					<CardList>{jsxPosts}</CardList>
				</Wrapper>
			</div>
		</>
	)
}

export async function getStaticProps() {
	const posts = await getPosts()

	return {
		props: {
			posts,
		},
		revalidate: 10, // In seconds
	}
}
