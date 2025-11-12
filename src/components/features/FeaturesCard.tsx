import React from 'react'
import { User } from 'lucide-react'

type FeaturesCardProps = {
  index?: number | string
  title?: string
  description?: string
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export default function FeaturesCard({ index = '01', title, description, Icon = User }: FeaturesCardProps) {
  return (
    <div className="relative rounded-xl border hover:border-blue-600 hover:rounded-tr-[20%] border-gray-100 bg-white p-8 text-center transition-all duration-300 shadow-sm">
      {/* badge */}
      <div className="absolute -top-3 left-4 inline-flex items-center justify-center rounded-tl-md rounded-tr-md rounded-br-md bg-blue-600 px-3 py-1">
        <span className="text-sm font-medium text-white">{index}</span>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
          <Icon className="h-8 w-8 text-blue-600" />
        </div>

        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        <p className="max-w-[18rem] text-center text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}
