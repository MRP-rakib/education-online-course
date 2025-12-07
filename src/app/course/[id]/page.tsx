'use client'

import { singleCourse } from '@/redux/feature/singleCourseSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook/hooks'
import { useParams, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import PageHeader from '@/components/utils/PageHeader'
import VideoPlayer from '@/utils/VideoPlayer'
import Link from 'next/link'
import Container from '@/utils/Container'
import Image from 'next/image'
import { VideoIcon } from 'lucide-react'

function Course() {
  const { data, error, loading } = useAppSelector(state => state.singleCourse)
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const pathname = usePathname()
  
  const tabs = ["overview", "curriculum", "review", "instructor"]
  const [activeTab, setActiveTab] = useState(tabs[0])

  const path = pathname.slice(1, 7)

  useEffect(() => {
    if (!id || Array.isArray(id)) return
    dispatch(singleCourse(id))
  }, [dispatch, id])
   
 const [video, setVideo] = useState<string>('');

useEffect(() => {
  const timer = setTimeout(()=>{
    if (data?.lessons?.length) {
    setVideo(data.lessons[0].video); // single video of the lesson
  }
  },0)
 return ()=> clearTimeout(timer)
}, [data]);

  const update = data?.last_update ? new Date(data.last_update) : null;


  return (
    <div>
      <PageHeader path={path} />

      <Container>
        <div className='mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8 '>
          {/* Left Column: Video + Tabs */}
          <div className='w-full'>
            <VideoPlayer video={video} />

            {/* Course Info */}
            <div className='pt-4 flex flex-col gap-4'>
              <div className='flex flex-wrap gap-6 justify-between'>
                {data?.instructor?.map(instructor => (
                  <div key={instructor.id} className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden">
                      <Image
                        src={instructor.avatar}
                        alt={instructor.name}
                        width={48}
                        height={48}
                        unoptimized
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className='text-gray-400 text-sm'>Instructor:</span>
                      <span className='font-semibold'>{instructor.name}</span>
                    </div>
                  </div>
                ))}
                
                <div className='flex flex-col gap-1'>
                  <span className='text-gray-400 text-sm'>Category:</span>
                  <span className='font-semibold'>{data?.category}</span>
                </div>

                <div className='flex flex-col gap-1'>
                  <span className='text-gray-400 text-sm'>Last Update:</span>
                  <span className='font-semibold'>{update?.toLocaleDateString()}</span>
                </div>

                <div className='flex flex-col gap-1'>
                  <span className='text-gray-400 text-sm'>Review:</span>
                  <span className='font-semibold'>{data?.rating || 0}</span>
                </div>
              </div>

              {/* Tabs */}
              <div className='my-4 py-4 px-4 w-full flex flex-wrap items-center justify-between rounded bg-gray-100'>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 cursor-pointer px-3 rounded capitalize transition-colors ${
                      activeTab === tab
                        ? "bg-blue-600 text-white font-bold"
                        : " text-black hover:bg-gray-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="mt-4">
                {activeTab === "overview" && <p>{data?.description}</p>}
                {activeTab === "curriculum" && 
                <div className='flex flex-col gap-2'>
                  {data?.lessons?.map(less=>(
                    <div key={less.id} onClick={()=>setVideo(less.video)} className={`flex items-center justify-between cursor-pointer
                    rounded bg-gray-100 py-4 px-4 ${video===less.video&&'bg-gray-300'}`}>
                      <div className='flex items-center gap-4'>
                         <VideoIcon/>
                       <p>{less.topic}</p>
                      </div>
                      <span>{less.duration} Minutes</span>
                    </div>
                  ))}
                </div>
                }
                {activeTab === "review" && <p>Review content goes here.</p>}
                {activeTab === "instructor" && (
                  <div className="flex flex-col gap-4">
                    {data?.instructor?.map(inst => (
                      <div key={inst.id} className="flex gap-3">
                        <div className="h-48 w-48 bg-gray-300 overflow-hidden">
                      <Image
                        src={inst.avatar}
                        alt={inst.name}
                        width={48}
                        height={48}
                        unoptimized
                        className="h-full w-full object-cover"
                      />
                    </div>
                        <div className='flex flex-col gap-1'>
                          <h4 className="font-semibold text-[18px] lg:text-2xl">{inst.name}</h4>
                          <p className='text-blue-500'>Web designer</p>
                          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsa asperiores debitis ad ipsum saepe expedita nihil blanditiis eum aperiam.</p>
                          <p className="">Total Courses: {inst.total_courses}</p>
                          <p className="">Total Students: {inst.total_student}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column (optional: sidebar) */}
          <div className='flex-1'>
            {/* You can add sidebar content here */}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Course
