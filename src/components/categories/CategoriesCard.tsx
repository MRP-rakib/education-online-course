import React from 'react'
import { Code } from 'lucide-react'

interface CategoriesCardProps {
	title?: string
	count?: number
	href?: string
	Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({
	title,
	count,
	href,
	Icon = Code,
}) => {
	return (
		<div className="border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center bg-white hover:shadow-md transition-shadow">
				<div className="mb-6">
					<div className="bg-blue-50 rounded-full p-4">
						<div className="bg-white rounded-full p-2">
							<Icon className="text-blue-600" size={28} />
						</div>
					</div>
				</div>

			<h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>

			<a href={href} className="text-sm text-gray-500 underline">
				{count} Courses
			</a>
		</div>
	)
}

export default CategoriesCard

