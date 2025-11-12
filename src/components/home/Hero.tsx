import React from 'react'
import Link from 'next/link'
import Container from '@/utils/Container'
import Image from 'next/image'

function Hero() {
  return (
    <section className="relative bg-transparent">
      <div aria-hidden className="absolute inset-0 bg-gray-50" />

      <Container>
        <div className="relative z-10 py-20 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-blue-600">Online E-learning Courses</p>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Creating a Better
                <span className="block">Future through <span className="text-blue-600">Education</span></span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-gray-600">It is long established fact that reader distracted by the readable content when looking at its layout.</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/courses" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-blue-700">
                  All Courses
                  <svg className="ml-3 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <Link href="/contact" className="inline-flex items-center rounded-md border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50">
                  Contact Us
                  <svg className="ml-3 h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 8l7.5 4.5L18 8m0 8V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative">

              <div className="h-72 max-w-[500px] lg:max-w-[800px] rounded-2xl bg-white/20 ring-1 ring-gray-100 shadow-sm flex items-center justify-center">
                <Image src='/hero.png' width={1000} height={500} alt='hero' />
              </div>
              <div className="absolute top-2 right-0 transform translate-x-4 md:translate-x-0">
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-lg">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3.5C23 14.17 18.33 13 16 13z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">24k+</div>
                    <div className="text-sm text-gray-500">Happy Students</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero