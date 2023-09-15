import { FaSpinner } from 'react-icons/fa'

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-16">
      <FaSpinner className="animate-spin text-4xl text-gray-500" />
    </div>
  )
}
