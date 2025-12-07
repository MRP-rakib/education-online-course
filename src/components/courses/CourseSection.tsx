'use client'
import Container from '@/utils/Container'
import Link from 'next/link'
import React, { useEffect } from 'react'
import CoursesCard from './CoursesCard'
import { useAppDispatch, useAppSelector } from '@/redux/hook/hooks'
import { courses } from '@/redux/feature/coursesSlice'

function CourseSection() {
  const {data,loading,error} =useAppSelector(state=>state.courses)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(courses())
  },[dispatch])


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
                {data?.slice(0,3).map((course) => (
                  <CoursesCard
                    key={course.id}
                    id={course.id}
                    image={course.image}
                    title={course.title}
                    category={course.category}
                    rating={course.rating}
                    total_students={course.total_students}
                    total_lessons={course.total_lessons}
                    total_hours={course.total_hours}
                    instructor={course.instructor}
                    // avater={course.instructor.}
                    price={course.price}
                  />
                ))}
            </div>
        </Container>
    </section>
  )
}

export default CourseSection