import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { getPosts } from '../utils/wordpress'

const Hero = dynamic(() => import('../components/Hero'))
const CallBack = dynamic(() => import('../components/CallBack'))
const Services = dynamic(() => import('../components/Services'))
const Activity = dynamic(() => import('../components/Activity'))
const OurClient = dynamic(() => import('../components/OurClient'))
const WhySection = dynamic(() => import('../components/WhySection'))
const CourseSection = dynamic(() => import('../components/CourseSection'))
const Posts = dynamic(() => import('../components/Posts'))

export default function Home({ posts }) {
	useEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])

	return (
		<>
			<Head>
				<title>Sasana Solusi Digital | Landing Page by Rayhan Soe</title>
			</Head>
			<Hero />
			<Services />
			<WhySection />
			<OurClient />
			<Activity />
			<CourseSection />
			<Posts posts={posts} type='home' />
			<CallBack />
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
