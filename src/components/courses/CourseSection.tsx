import Container from '@/utils/Container'
import Link from 'next/link'
import React from 'react'
import CoursesCard from './CoursesCard'

function CourseSection() {
  const courses = [
    
    {
      id: '2',
      image: '/image1.webp',
      title: 'React - The Complete Guide',
      category: 'Frontend',
      rating: 4.9,
      totalStudents: 3120,
      totalLessons: 52,
      totalHours: 40,
      instructor: 'Sarah Johnson',
      avater:'/persion1.png',
      price: 79,
    },
    {
      id: '3',
      image: '/image2.jpg',
      title: 'Node.js Backend Development',
      category: 'Backend',
      rating: 4.7,
      totalStudents: 1890,
      totalLessons: 38,
      totalHours: 28,
      instructor: 'Mike Chen',
      avater:'/persion1.png',
      price: 89,
    },
    {
      id: '4',
      image: '/image3.jpg',
      title: 'UI/UX Design Masterclass',
      category: 'Design',
      rating: 4.6,
      totalStudents: 1450,
      totalLessons: 35,
      totalHours: 24,
      instructor: 'Emma Davis',
      avater:'/persion1.png',
      price: 69,
    },
  ]

  return (
    <section className="py-16 lg:py-24">
        <Container>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="text-lg font-semibold text-blue-600">Our Courses</p>
                <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Courses You May Like</h2>
                <p className="mt-4 max-w-2xl text-base text-gray-600">Explore our wide range of courses designed to help you achieve your learning goals.</p>
              </div>
              <Link href="/courses" className="whitespace-nowrap rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-blue-700">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <CoursesCard
                    key={course.id}
                    id={course.id}
                    image={course.image}
                    title={course.title}
                    category={course.category}
                    rating={course.rating}
                    totalStudents={course.totalStudents}
                    totalLessons={course.totalLessons}
                    totalHours={course.totalHours}
                    instructor={course.instructor}
                    avater={course.avater}
                    price={course.price}
                  />
                ))}
            </div>
        </Container>
    </section>
  )
}

export default CourseSection