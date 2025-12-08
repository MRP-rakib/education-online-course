import { lessons } from '@/types/courses'
import { VideoIcon } from 'lucide-react'
import React from 'react'

function LessonsTab({id,video,topic,duration,onclick}:lessons) {
    return (
        <div key={id} onClick={onclick} className={`flex items-center justify-between cursor-pointer
                    rounded bg-gray-100 py-4 px-4 ${video === video && 'bg-gray-300'}`}>
            <div className='flex items-center gap-4'>
                <VideoIcon />
                <p>{topic}</p>
            </div>
            <span>{duration} Minutes</span>
        </div>
    )
}

export default LessonsTab