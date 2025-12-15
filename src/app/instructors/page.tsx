'use client'
import PageHeader from '@/components/utils/PageHeader'
import { usePathname } from 'next/navigation'
import ShowAllInstructor from '@/components/instructors/ShowAllInstructor'

function Instructors() {
    const pathname = usePathname()
    const path = pathname.slice(1)
  return (
    <div>
        <PageHeader path={path}/>
        <ShowAllInstructor/>
    </div>
  )
}

export default Instructors