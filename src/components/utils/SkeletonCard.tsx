// components/SkeletonCard.jsx
export default function SkeletonCard() {
  return (
    <div className="animate-pulse p-6 rounded-xl shadow-md bg-gray-100 flex flex-col space-y-4">
      {/* Avatar */}
      <div className="h-20 w-20 rounded-full bg-gray-200 mx-auto"></div>

      {/* Name & Department */}
      <div className="space-y-2 text-center">
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>

      {/* Stats: Total Students & Courses */}
      <div className="flex justify-around mt-4">
        <div className="flex flex-col items-center space-y-1">
          <div className="h-3 w-8 bg-gray-200 rounded"></div>
          <div className="h-2 w-4 bg-gray-200 rounded"></div>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="h-3 w-8 bg-gray-200 rounded"></div>
          <div className="h-2 w-4 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mt-2">
        <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
        <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
        <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
}
