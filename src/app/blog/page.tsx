'use client'
import BlogCard from '@/components/blogs/BlogCard'
import ShowAllBlog from '@/components/blogs/ShowAllBlogs'
import PageHeader from '@/components/utils/PageHeader'
import { usePathname } from 'next/navigation'
import React from 'react'

function Blog() {
    const pathname = usePathname()
    const path = pathname.slice(1)
  return (
    <div>
        <PageHeader path={path}/>
        <ShowAllBlog/>
    </div>
  )
}

export default Blog