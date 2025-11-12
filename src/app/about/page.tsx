'use client'
import FeaturesSection from '@/components/features/FeaturesSection'
import AboutUs from '@/components/home/AboutUs'
import OurImpact from '@/components/home/OurImpact'
import InstructorSection from '@/components/instructors/InstructorSections'
import PageHeader from '@/components/utils/PageHeader'
import { usePathname } from 'next/navigation'
import React from 'react'

function About() {
    const pathname = usePathname()
    const path = pathname.slice(1)
  return (
    <div>
        <PageHeader path={path}/>
        <FeaturesSection/>
        <AboutUs/>
        <OurImpact/>
        <InstructorSection/>
    </div>
  )
}

export default About