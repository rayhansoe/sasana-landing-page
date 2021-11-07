// /utils/wordpress.js

import Link from 'next/link'

const BASE_URL = 'https://sasanadigital.com/wp-json/wp/v2'

async function getPosts() {
	const postsRes = await fetch(BASE_URL + '/posts')
	const posts = await postsRes.json()
	return posts
}

async function getPost(slug) {
	const posts = await getPosts()
	const postArray = posts.filter(post => post.slug == slug)
	const post = postArray.length > 0 ? postArray[0] : null
	return post
}
async function getEvents() {
	const eventsRes = await fetch(BASE_URL + '/events')
	const events = await eventsRes.json()
	return events
}

async function getEvent(slug) {
	const events = await getEvents()
	const eventArray = events.filter(event => event.slug == slug)
	const event = eventArray.length > 0 ? eventArray[0] : null
	return event
}

async function getSlugs(type) {
	let elements = []
	switch (type) {
		case 'posts':
			elements = await getPosts()
			break
		case 'events':
			elements = await getEvents()
			break
	}
	const elementsIds = elements.map(element => {
		return {
			params: {
				slug: element.slug,
			},
		}
	})
	return elementsIds
}

async function getMedia() {
	const mediaRes = await fetch(BASE_URL + '/media')
	const media = await mediaRes.json()
	return media
}

function getFeaturedMedia(media, id) {
	const featuredMediaArray = media.filter(element => element.id == id)
	return featuredMediaArray.length > 0 ? featuredMediaArray[0] : null
}

// /posts/[slug].js

// import { getPost, getSlugs } from '../../utils/wordpress';

export default function PostPage({ post }) {
	return (
		<div className='container pt-5'>
			<h1 className='text-center pb-5'>{post.title.rendered}</h1>
			<div
				className='card-text pb-5'
				dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
			<Link href='/'>
				<a className='btn btn-primary'>Back to Home</a>
			</Link>
		</div>
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
