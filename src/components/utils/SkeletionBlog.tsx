
export default function SkeletonBlogCard() {
  return (
    <div className="animate-pulse rounded-xl shadow-md bg-gray-100 overflow-hidden flex flex-col space-y-4">
      <div className="h-48 w-full bg-gray-200"></div>

      <div className="p-4 flex flex-col space-y-3">
        <div className="h-5 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded w-4/6"></div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-gray-200"></div>
            <div className="h-3 w-20 bg-gray-200 rounded"></div>
          </div>
          <div className="h-3 w-16 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
