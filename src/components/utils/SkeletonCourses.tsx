
export default function SkeletonCourseCard() {
  return (
    <div className="animate-pulse p-4 rounded-xl shadow-md bg-gray-100 flex flex-col space-y-4">
      <div className="h-40 w-full rounded-lg bg-gray-200"></div>
      <div className="h-5 bg-gray-200 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex flex-col space-y-1">
          <div className="h-3 w-12 bg-gray-200 rounded"></div>
          <div className="h-2 w-6 bg-gray-200 rounded"></div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="h-3 w-12 bg-gray-200 rounded"></div>
          <div className="h-2 w-6 bg-gray-200 rounded"></div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="h-3 w-12 bg-gray-200 rounded"></div>
          <div className="h-2 w-6 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="flex space-x-1 mt-2 justify-start">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-3 w-3 bg-gray-200 rounded-full"></div>
        ))}
      </div>
    </div>
  );
}
