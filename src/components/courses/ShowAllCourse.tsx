import Container from "@/utils/Container"
import CoursesCard from "./CoursesCard"
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook/hooks";
import { courses } from "@/redux/feature/coursesSlice";

// const courses = [
//   {
//     id: '1',
//     image: '/image1.webp',
//     title: 'React - The Complete Guide',
//     category: 'Frontend',
//     rating: 4.9,
//     totalStudents: 3120,
//     totalLessons: 52,
//     totalHours: 40,
//     instructor: 'Sarah Johnson',
//     avater: '/persion1.png',
//     price: 79,
//   },
//   {
//     id: '2',
//     image: '/image2.jpg',
//     title: 'Node.js Backend Development',
//     category: 'Backend',
//     rating: 4.7,
//     totalStudents: 1890,
//     totalLessons: 38,
//     totalHours: 28,
//     instructor: 'Mike Chen',
//     avater: '/persion1.png',
//     price: 89,
//   },
//   {
//     id: '3',
//     image: '/image3.jpg',
//     title: 'UI/UX Design Masterclass',
//     category: 'Design',
//     rating: 4.6,
//     totalStudents: 1450,
//     totalLessons: 35,
//     totalHours: 24,
//     instructor: 'Emma Davis',
//     avater: '/persion1.png',
//     price: 69,
//   },
//   {
//     id: '4',
//     image: '/image1.webp',
//     title: 'Python for Beginners',
//     category: 'Programming',
//     rating: 4.8,
//     totalStudents: 2560,
//     totalLessons: 48,
//     totalHours: 32,
//     instructor: 'John Doe',
//     avater: '/persion1.png',
//     price: 59,
//   },
//   {
//     id: '5',
//     image: '/image2.jpg',
//     title: 'Fullstack Web Development Bootcamp',
//     category: 'Fullstack',
//     rating: 4.9,
//     totalStudents: 4100,
//     totalLessons: 65,
//     totalHours: 55,
//     instructor: 'Olivia Brown',
//     avater: '/persion1.png',
//     price: 99,
//   },
//   {
//     id: '6',
//     image: '/image3.jpg',
//     title: 'Advanced TypeScript Essentials',
//     category: 'Frontend',
//     rating: 4.5,
//     totalStudents: 980,
//     totalLessons: 30,
//     totalHours: 22,
//     instructor: 'Lucas White',
//     avater: '/persion1.png',
//     price: 75,
//   },
//   {
//     id: '7',
//     image: '/image1.webp',
//     title: 'Machine Learning with Python',
//     category: 'AI & ML',
//     rating: 4.8,
//     totalStudents: 2780,
//     totalLessons: 58,
//     totalHours: 46,
//     instructor: 'Sophia Kim',
//     avater: '/persion1.png',
//     price: 109,
//   },
//   {
//     id: '8',
//     image: '/image2.jpg',
//     title: 'Next.js 14 & Modern React Development',
//     category: 'Frontend',
//     rating: 4.9,
//     totalStudents: 3290,
//     totalLessons: 50,
//     totalHours: 38,
//     instructor: 'Liam Carter',
//     avater: '/persion1.png',
//     price: 95,
//   },
//   {
//     id: '9',
//     image: '/image3.jpg',
//     title: 'Database Design & SQL Mastery',
//     category: 'Backend',
//     rating: 4.6,
//     totalStudents: 1670,
//     totalLessons: 40,
//     totalHours: 30,
//     instructor: 'Ava Martinez',
//     avater: '/persion1.png',
//     price: 72,
//   },
//   {
//     id: '10',
//     image: '/image1.webp',
//     title: 'DevOps Fundamentals with Docker & Kubernetes',
//     category: 'DevOps',
//     rating: 4.7,
//     totalStudents: 1985,
//     totalLessons: 45,
//     totalHours: 36,
//     instructor: 'Noah Patel',
//     avater: '/persion1.png',
//     price: 99,
//   },
// ];

function ShowAllCourse() {
  const {data,loading,error} = useAppSelector(state=>state.courses)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(courses())
  },[dispatch])
  const itemPerPage = 6
  const totalPage = Math.ceil(data.length / itemPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  const handleNext = () => {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1)
  }

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
  }
  
  const indexOfLastItem = currentPage * itemPerPage
  const indexOfFirstItem = indexOfLastItem - itemPerPage
  const currentCourses = data.slice(indexOfFirstItem, indexOfLastItem)
  const showCount = indexOfLastItem>data.length?data.length:indexOfLastItem
  return (
    <div className="mt-8 md:mt-12 lg:mt-16">
      <Container>
        <p>Show {showCount} <span className="text-blue-600">Course</span> of {data.length} result</p>
        {currentCourses.length!==0?(
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 my-10">
          {currentCourses.map(course => (
            <CoursesCard key={course.id} id={course.id} image={course.image} title={course.title} total_hours={course.total_hours}
              total_lessons={course.total_lessons} total_students={course.total_students}
              category={course.title} price={course.price} instructor={course.instructor}
              rating={course.rating}/>
          ))}
        </div>
        ):(
          <div className=" py-15 flex items-center justify-center">
            <h4 className="text-2xl lg:text-4xl font-black">No Courses Available</h4>
          </div>
        )}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPage)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageClick(i + 1)} 
              className={`px-4 py-2 rounded-lg border transition ${currentPage === i + 1
                ? 'bg-black text-gray-600 border-black '
                : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                }`}
            >
              {i + 1}
            </button>
          ))}
          <button disabled={currentPage === totalPage} onClick={handleNext} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
            Next
          </button>
        </div>
      </Container>
    </div>
  )
}

export default ShowAllCourse