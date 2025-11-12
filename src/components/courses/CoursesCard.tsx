import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Users, BookOpen, Clock } from 'lucide-react'

interface CoursesCardProps {
  id?: string
  image?: string
  title: string
  category: string
  rating: number
  totalStudents: number
  totalLessons: number
  totalHours: number
  instructor: string
  avater:string
  price?: number
}

export default function CoursesCard({
  id = '1',
  image = '/placeholder-course.jpg',
  title,
  category,
  totalStudents,
  totalLessons,
  totalHours,
  instructor,
  avater,
  price,
}: CoursesCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <div className="h-full overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg">
        {/* Image container with price badge */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          {price && (
            <div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-blue-600 px-4 py-2 shadow-md">
              <span className="text-sm font-bold text-white">${price.toFixed(2)}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700">({totalStudents})</span>
          </div>
          <h3 className="text-xl font-bold leading-tight text-gray-900">{title}</h3>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{totalStudents} Students</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>{totalLessons} Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{totalHours} Hours</span>
            </div>
          </div>
          <div className="border-t" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
                <Image
                  src={avater}
                  alt={instructor}
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-gray-900">{instructor}</span>
            </div>
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{category}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
