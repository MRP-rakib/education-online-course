'use client'
import Link from 'next/link'
import Container from '../../utils/Container'
import { CheckCircle2, FileText } from 'lucide-react'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
        
            <div className="relative z-10 rounded-3xl h-96 w-full flex items-center justify-center">
              <Image src='/about.png' width={1000} height={500} alt='about'/>
            </div>

          </div>
          <div>
            <p className="text-lg font-semibold text-blue-600">About Us Education</p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              Go Your Skill in Next Level
            </h2>

            <p className="mt-6 max-w-lg text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed turpis in arcu gravida faucibus euismod eget magna. Donec non justo ac libero pharetra congue.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4 items-center">
                <div className="shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Success Mission</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <FileText className="h-6 w-6 text-blue-600" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Learning Vision</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <Link href="#" className="mt-8 inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700">
              Discover More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
