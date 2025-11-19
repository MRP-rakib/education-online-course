'use client'
import PageHeader from '@/components/utils/PageHeader'
import { usePathname } from 'next/navigation'


function Instructors() {
    const pathname = usePathname()
    const path = pathname.slice(1)
  return (
    <div>
        <PageHeader path={path}/>
        
    </div>
  )
}

export default Instructors