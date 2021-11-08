//index.js

import Head from 'next/head'
import dynamic from 'next/dynamic'

import { getPosts } from '../../utils/wordpress'

const Posts = dynamic(() => import('../../components/Posts.jsx'))

export default function PagePost({ posts }) {
	return (
		<>
			<Head>
				<title>Sasana Digital Posts</title>
				<meta name='description' content='Keep up to date with the latest trends in tech' />
				<link rel='icon' href='/favicon.ico' />
				{/* You can add more metadata here, like open graph tags for social media, etc */}
			</Head>

			<Posts posts={posts} />
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
