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
import { Book, Languages, Timer, User2, VideoIcon } from 'lucide-react'
import CoursesCard from '@/components/courses/CoursesCard'
import { suggestionCourses } from '@/redux/feature/suggetionsSlice'

function Course() {
  const { data, error, loading } = useAppSelector(state => state.singleCourse)
  const suggesitons = useAppSelector(state=>state.suggetionsCourse)
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const pathname = usePathname()
  
  const tabs = ["overview", "curriculum", "review", "instructor"]
  const [activeTab, setActiveTab] = useState(tabs[0])

  const path = pathname.slice(1, 7)

  useEffect(() => {
    if (!id || Array.isArray(id)) return
    dispatch(singleCourse(id))
    dispatch(suggestionCourses(id))
  }, [dispatch, id])
   
 const [video, setVideo] = useState<string>('');

useEffect(() => {
  const timer = setTimeout(()=>{
    if (data?.lessons?.length) {
    setVideo(data.lessons[0].video)
  }
  else{
    setVideo('')
  }
  },0)
 return ()=> clearTimeout(timer)
}, [data?.lessons]);

  const update = data?.last_update ? new Date(data.last_update) : null;


  return (
    <div>
      <PageHeader path={path} />

      <Container>
        <div className='mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 '>
          <div className='w-full'>
            <VideoPlayer video={video} />
            <div className='pt-4 flex flex-col gap-4'>
              <div className='flex px-6 flex-wrap gap-6 justify-between'>
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
          <div className='flex-1'>
            <div className=' shadow-2xl p-7.5 rounded'>
               <h4 className='text-2xl font-bold'>Courses Features</h4>
               <div className='flex flex-col'>
                <div className='flex items-center justify-between py-4 px-2 border-b border-gray-200'>
                  <span className='flex gap-1 items-center text-[14px] text-blue-600'><Timer/> <p className='text-base text-black'>Duration</p></span>
                  <span>{data?.total_hours} Hours</span>
                </div>
                <div className='flex items-center justify-between py-4 px-2 border-b border-gray-200'>
                  <span className='flex gap-1 items-center text-[14px] text-blue-600'><Book/> <p className='text-base text-black'>Lessons</p></span>
                  <span>{data?.total_lessons}</span>
                </div>
                <div className='flex items-center justify-between py-4 px-2 border-b border-gray-200'>
                  <span className='flex gap-1 items-center text-[14px] text-blue-600'><User2/> <p className='text-base text-black'>Students</p></span>
                  <span>{data?.total_students}</span>
                </div>
                
                <div className='flex items-center justify-between py-4 px-2 border-b border-gray-200'>
                 <span className='flex gap-1 items-center text-[14px] text-blue-600'><Languages/> <p className='text-base text-black'>Language</p></span>

                  <span>English</span>
                </div>
                <div className='py-10 flex flex-col items-center gap-7.5 justify-center'>
                  <span className='text-4xl text-blue-600'>${data?.price}</span>
                  <button className='py-3 px-5 bg-blue-600 text-white rounded-2xl'>Enroll Now</button>
                </div>
               </div>
            </div>
          </div>
        </div>
        {suggesitons?.data.length!==0&&(
          <div className='my-8'>
          <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Courses You May Like</h2>
                <p className="mt-4 max-w-2xl text-base text-gray-600">Explore our wide range of courses designed to help you achieve your learning goals.</p>
              </div>
              <Link href="/courses" className="whitespace-nowrap rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-blue-700">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {suggesitons.data?.slice(0,3).map((course) => (
                  <CoursesCard
                    key={course.id}
                    id={course.id}
                    image={course.image}
                    title={course.title}
                    category={course.category}
                    rating={course.rating}
                    total_students={course.total_students}
                    total_lessons={course.total_lessons}
                    total_hours={course.total_hours}
                    instructor={course.instructor}
                    price={course.price}
                  />
                ))}
            </div>
        </div>
        )}
      </Container>
    </div>
  )
}

export default Course
