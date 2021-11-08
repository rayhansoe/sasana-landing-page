// /posts/[slug].js

import Link from 'next/link'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import { getPost, getSlugs } from '../../utils/wordpress'

const Wrapper = dynamic(() => import('../../components/Wrapper'))

export default function PostPage({ post }) {
	return (
		<>
			<Head>
				<title>{post.title.rendered}</title>
			</Head>
			<div className='container'>
				<Wrapper type='post'>
					<div className='content'>
						<h1 className='headingX1'>{post.title.rendered}</h1>
						<div className='data' dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
						<Link href='/'>
							<a className='btn btn-primary'>Back to Home</a>
						</Link>
					</div>
				</Wrapper>
			</div>
		</>
	)
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
	const paths = await getSlugs('posts')

	return {
		paths,
		//this option below renders in the server (at request time) pages that were not rendered at build time
		//e.g when a new blogpost is added to the app
		fallback: 'blocking',
	}
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params }) {
	const post = await getPost(params.slug)

	return {
		props: {
			post,
		},
		revalidate: 10, // In seconds
	}
}
