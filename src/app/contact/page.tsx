'use client'
import PageHeader from '@/components/utils/PageHeader'
import { usePathname } from 'next/navigation'
import React from 'react'

function Contact() {
    const pathname = usePathname()
    const path = pathname.slice(1)
  return (
    <div>
        <PageHeader path={path}/>
    </div>
  )
}

export default Contact