import { Instructor } from '@/types/courses'
import Image from 'next/image'
import React from 'react'

function InstructorTab({id,avatar,name,department,description,total_courses,total_student}:Instructor) {
    return (
        <div key={id} className="flex items-start gap-3">
            <div className="h-48 w-48 bg-gray-300 shrink-0 overflow-hidden">
                <Image
                    src={avatar}
                    alt={name}
                    width={48}
                    height={48}
                    unoptimized
                    className="h-full w-full object-cover"
                />
            </div>
            <div className='flex flex-col gap-1'>
                <h4 className="font-semibold text-[18px] lg:text-2xl">{name}</h4>
                <p className='text-blue-500'>{department}</p>
                <p className='text-gray-500'>{description}</p>
                <p className="">Total Courses: {total_courses}</p>
                <p className="">Total Students: {total_student}</p>
            </div>
        </div>
    )
}

export default InstructorTab