import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/Hero'))
const CallBack = dynamic(() => import('../components/CallBack'))
const Services = dynamic(() => import('../components/Services'))
const Activity = dynamic(() => import('../components/Activity'))
const OurClient = dynamic(() => import('../components/OurClient'))
const WhySection = dynamic(() => import('../components/WhySection'))
const CourseSection = dynamic(() => import('../components/CourseSection'))

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<WhySection />
			<OurClient />
			<Activity />
			<CourseSection />
			<CallBack />
		</>
	)
}
