'use client'
import Container from '@/utils/Container'
import Link from 'next/link'
import InstructorsCard from './InstructorsCard'
import { useAppDispatch, useAppSelector } from '@/redux/hook/hooks'
import { useEffect } from 'react'
import { instructor } from '@/redux/feature/instructorSlice'

function InstructorSection() {
  const {data} = useAppSelector(state=>state.instructor)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(instructor())
  },[dispatch])

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
          {data.slice(0,3).map((ins) => (
            <InstructorsCard
              key={ins.id}
              id={ins.id}
              avatar={ins.avatar}
              name={ins.name}
              department={ins.department}
              description={ins.description}
              total_student={ins.total_student}
              total_courses={ins.total_courses}
              facebook={ins.facebook}
              linkedin={ins.linkedin}
              twitter={ins.twitter}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default InstructorSection