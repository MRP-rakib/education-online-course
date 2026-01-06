import Container from "@/utils/Container"
import CoursesCard from "./CoursesCard"
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook/hooks";
import { courses } from "@/redux/feature/coursesSlice";
import SkeletonCourseCard from "../utils/SkeletonCourses";


function ShowAllCourse() {
  const { data, loading, error } = useAppSelector(state => state.courses)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(courses())
  }, [dispatch])
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
  const showCount = indexOfLastItem > data.length ? data.length : indexOfLastItem
  return (
    <div className="mt-8 md:mt-12 lg:mt-16">
      <Container>
        <p>Show {showCount} <span className="text-blue-600">Course</span> of {data.length} result</p>
        {loading?(
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 my-10">
                                  {Array.from({ length: 6 }).map((_, i) => (
                                      <SkeletonCourseCard key={i} />
                                  ))}
                              </div>
        )
        :currentCourses.length !== 0 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 my-10">
              {currentCourses.map(course => (
                <CoursesCard key={course.id} id={course.id} image={course.image} title={course.title} total_hours={course.total_hours}
                  total_lessons={course.total_lessons} total_students={course.total_students}
                  category={course.title} price={course.price} instructor={course.instructor}
                  rating={course.rating} />
              ))}
            </div>
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
                    ? 'bg-black text-white border-black '
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
          </div>
        ) : (
          <div className=" py-15 flex items-center justify-center">
            <h4 className="text-2xl lg:text-4xl font-black">No Courses Available</h4>
          </div>
        )}
      </Container>
    </div>
  )
}

export default ShowAllCourse