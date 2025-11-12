import React from 'react'
import Image from 'next/image'
import { Plus, Users, BookOpen, Twitter, Linkedin, Facebook } from 'lucide-react'
import Link from 'next/link'

interface InstructorsCardProps {
  name?: string
  title?: string
  students?: string
  courses?: string
  avatar?: string
}

const InstructorsCard: React.FC<InstructorsCardProps> = ({
  name = 'Masum Billah',
  title = 'UI / UX Designer',
  students = '25+ Students',
  courses = '32 Courses',
  avatar = '/placeholder-avatar.jpg',
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
      <div className="p-8 flex flex-col items-center text-center">
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
            <Image src={avatar} alt={name} width={128} height={128} className="object-cover" />
          </div>

          {/* sliding badge: expands on parent .group hover to reveal social icons */}
          <div className="absolute -right-2 -bottom-2 flex items-center">
            <div className="relative overflow-hidden rounded-full transition-all duration-300 ease-linear w-8 h-8 group-hover:w-28">
              {/* Plus visible by default, fades/zooms out on hover */}
              <div className="absolute inset-0 bg-blue-600 rounded-full flex items-center justify-center px-1 transition-opacity duration-200 ease-linear group-hover:opacity-0 group-hover:scale-95">
                <Plus className="text-white" size={14} />
              </div>

              {/* Social icons hidden by default, slide and fade in on hover */}
              <div className="absolute right-0 top-0 h-8 pr-1 flex items-center gap-2 transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <Link href="#" aria-label="Twitter" className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Facebook className="text-blue-600" size={14} />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Linkedin className="text-blue-600" size={14} />
                </Link>
                <Link href="#" aria-label="Dribbble" className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Twitter className="text-pink-500" size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-6 text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-blue-600">{title}</p>
      </div>

      <div className="border-t border-gray-100 px-6 py-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Users className="text-gray-400" size={16} />
            <span>{students}</span>
          </div>

          <div className="flex items-center gap-2">
            <BookOpen className="text-gray-400" size={16} />
            <span>{courses}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorsCard
