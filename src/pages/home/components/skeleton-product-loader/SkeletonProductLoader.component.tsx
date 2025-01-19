import { generateSkeletons } from './skeletonProductLoader.helpers'

interface SkeletonProductLoaderProps {
  count: number
}

const SkeletonProductLoader: React.FC<SkeletonProductLoaderProps> = ({
  count,
}) => {
  return (
    <>
      {generateSkeletons(count).map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 rounded-lg shadow-md p-4 animate-pulse"
        >
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-80 bg-gray-300 rounded w-full"></div>
        </div>
      ))}
    </>
  )
}

export default SkeletonProductLoader
