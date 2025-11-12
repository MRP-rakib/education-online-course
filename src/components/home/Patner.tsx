"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '../../utils/Container'

const partners = [
	{ src: '/patner1.svg', alt: 'Udemy' },
	{ src: '/patner2.svg', alt: 'HubSpot' },
	{ src: '/patner3.svg', alt: 'Coursera' },
	{ src: '/patner4.svg', alt: 'Trustpilot' },
	{ src: '/patner5.svg', alt: 'British Council' },
]

export default function Patner() {
	const loop = [...partners, ...partners]

	return (
		<section className="py-8">
			<Container>
				<div className="rounded-2xl bg-[#05303a] p-12 overflow-hidden">
					<motion.div
						className="flex gap-4 md:gap-6 lg:gap-12 items-center"
						style={{ width: '200%' }}
						animate={{ x: ['0%', '-50%'] }}
						transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
						aria-hidden="true"
					>
						{loop.map((p, i) => (
							<div key={`partner-${i}`} className="flex items-center justify-center px-6">
								<div className="flex items-center justify-center w-36 h-10 opacity-95">
									<Image src={p.src} alt={p.alt} width={160} height={40} className="object-contain" />
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</Container>
		</section>
	)
}

