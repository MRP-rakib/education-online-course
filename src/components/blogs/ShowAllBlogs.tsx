import Container from "@/utils/Container"

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook/hooks";
import BlogCard from "./BlogCard";
import { getBlog } from "@/redux/feature/blogSlice";
import SkeletonBlogCard from "../utils/SkeletionBlog";

// import InstructorsCard from "./InstructorsCard";
// import { instructor } from "@/redux/feature/instructorSlice";

// const data = [
//   {
//     id: "1",
//     image: "https://example.com/image1.jpg",
//     date: "2025-12-27",
//     category: "Technology",
//     title: "AI Revolution in 2025",
//     description: "Exploring how AI is transforming industries and everyday life in 2025."
//   },
//   {
//     id: "2",
//     image: "https://example.com/image2.jpg",
//     date: "2025-12-26",
//     category: "Health",
//     title: "Wellness Trends This Year",
//     description: "A look into the top wellness and fitness trends dominating 2025."
//   }
// ];

function ShowAllBlog() {
    const { data, loading, error } = useAppSelector(state => state.blog)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getBlog())
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
    const currentBlog = data.slice(indexOfFirstItem, indexOfLastItem)
    const showCount = indexOfLastItem > data.length ? data.length : indexOfLastItem
    return (
        <div className="mt-8 md:mt-12 lg:mt-16">
            <Container>
                <p>Show {showCount} <span className="text-blue-600">Blogs</span> of {data.length} result</p>
                {loading?(
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 my-10">
                                                      {Array.from({ length: 6 }).map((_, i) => (
                                                          <SkeletonBlogCard key={i} />
                                                      ))}
                                                  </div>
                ):
                currentBlog.length !== 0 ? (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 my-10">
                            {currentBlog.map(blog => (
                                <BlogCard
                                key={blog.id}
                                id={blog.id}
                                image={blog.image}
                                title={blog.title}
                                published_date={blog.published_date}
                                description={blog.description}
                                category={blog.category}    
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
                        <h4 className="text-2xl lg:text-4xl font-black">No Blogs Available</h4>
                    </div>
                )}

            </Container>
        </div>
    )
}

export default ShowAllBlog