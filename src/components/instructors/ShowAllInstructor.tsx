import Container from "@/utils/Container"

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook/hooks";

import InstructorsCard from "./InstructorsCard";
import { instructor } from "@/redux/feature/instructorSlice";


function ShowAllCourse() {
    const { data, loading, error } = useAppSelector(state => state.instructor)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(instructor())
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
    const currentInstructors = data.slice(indexOfFirstItem, indexOfLastItem)
    const showCount = indexOfLastItem > data.length ? data.length : indexOfLastItem
    return (
        <div className="mt-8 md:mt-12 lg:mt-16">
            <Container>
                <p>Show {showCount} <span className="text-blue-600">Instructors</span> of {data.length} result</p>
                {currentInstructors.length !== 0 ? (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 my-10">
                            {currentInstructors.map(ins => (
                                <InstructorsCard
                                    key={ins.id}
                                    id={ins.id}
                                    avatar={ins.avatar}
                                    name={ins.name}
                                    department={ins.department}
                                    description={ins.description}
                                    total_student={ins.total_student}
                                    total_courses={ins.total_courses}
                                    facebook={ins.facebook}
                                    linkedin={ins.linkedin}
                                    twitter={ins.twitter}
                                />
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
                            <button disabled={currentPage === totalPage} onClick={handleNext} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 transition">
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