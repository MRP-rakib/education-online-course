import React from 'react'
import Container from '../../utils/Container'
import FeaturesCard from './FeaturesCard'
import { User, Video, Tag, LifeBuoy } from 'lucide-react'

export default function FeaturesSection() {
  const items = [
    { index: '01', title: 'Exclusive Advisor', desc: 'Lorem ipsum dolor amet consectetur', Icon: User },
    { index: '02', title: 'Video Tutorial', desc: 'Lorem ipsum dolor amet consectetur', Icon: Video },
    { index: '03', title: 'Affordable Price', desc: 'Lorem ipsum dolor amet consectetur', Icon: Tag },
    { index: '04', title: 'Life Time Support', desc: 'Lorem ipsum dolor amet consectetur', Icon: LifeBuoy },
  ]

  return (
    <section className="py-16">
      <Container>
        <div className="text-center">
          <p className="text-lg font-semibold text-blue-600">Features</p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">One Platform Many Course</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <FeaturesCard key={it.index} index={it.index} title={it.title} description={it.desc} Icon={it.Icon} />
          ))}
        </div>
      </Container>
    </section>
  )
}
