'use client'
import ShowAllCourse from '@/components/courses/ShowAllCourse'
import PageHeader from '@/components/utils/PageHeader'
import { usePathname } from 'next/navigation'

function Courses() {
    const pathname = usePathname()
    const path = pathname.slice(1)
  return (
    <div>
        <PageHeader path={path}/>
        <ShowAllCourse/>
    </div>
  )
}

export default Courses