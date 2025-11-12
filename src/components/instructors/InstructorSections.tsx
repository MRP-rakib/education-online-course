import Container from '@/utils/Container'
import Link from 'next/link'
import React from 'react'
import InstructorsCard from './InstructorsCard'

function InstructorSection() {
  const courses = [
    
    {
      image: '/persion1.png',
      title: 'React - The Complete Guide',
    },
    {
      image: '/persion1.png',
      title: 'Node.js Backend Development',
      
    },
    {
      image: '/persion1.png',
      title: 'UI/UX Design Masterclass',
      
    },
    {
      image: '/persion1.png',
      title: 'UI/UX Design Masterclass',
      
    },
  ]

  return (
    <section className="py-16 lg:py-24">
        <Container>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="text-lg font-semibold text-blue-600">Talented Instructors</p>
                <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Expert Instructors</h2>
              </div>
              <Link href="/instructors" className="whitespace-nowrap rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-blue-700">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {courses.map((course,index) => (
                  <InstructorsCard
                    key={index}
                    avatar={course.image}
                    title={course.title}
                  />
                ))}
            </div>
        </Container>
    </section>
  )
}

export default InstructorSection