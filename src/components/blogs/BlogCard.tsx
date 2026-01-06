import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Blog } from '@/types/blog'


function BlogCard({
  id,
  image,
  published_date,
  category,
  title,
  description,
}: Blog) {
  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
      {/* Image Container */}
      <div className='relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-gray-200'>
        <Image
          src={image || 'https://example.com/image2.jpg'}
          alt={title || 'title'}
          fill
          className='object-cover hover:scale-105 transition-transform duration-300'
        />

        {/* Category Badge */}
        <div className='absolute top-4 right-4'>
          <span className='bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold'>
            {category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className='p-6 md:p-8'>
        {/* Date with Icon */}
        <div className='flex items-center gap-2 text-gray-600 text-sm mb-4'>
          <svg
            className='w-4 h-4 text-blue-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>{published_date}</span>
        </div>

        {/* Title */}
        <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200 line-clamp-2'>
          {title}
        </h3>

        {/* Description */}
        <div
          className='text-gray-600 text-sm md:text-base leading-relaxed mb-6 line-clamp-2'
          dangerouslySetInnerHTML={{ __html: description||'' }}
        />

        {/* Explore More Link */}
        <Link
          href={`/blog/${id}`}
          className='text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 inline-flex items-center gap-2'
        >
          Explore More
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard