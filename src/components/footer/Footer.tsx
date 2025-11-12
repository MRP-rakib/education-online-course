import React from 'react'
import Link from 'next/link'
import Container from '@/utils/Container'

function Footer() {
  return (
    <footer className="bg-[#002935] text-white mt-8 pt-6">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 3L1 9l11 6 9-4.909V17h2V9L12 3z" fill="currentColor" />
                  <path d="M11 12.13V21h2v-8.87" fill="#ffffff" opacity="0.9" />
                </svg>
              </span>
              <span className="text-xl font-semibold text-white">Edumon</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm text-gray-300">High-quality online courses taught by expert instructors. Learn at your pace and advance your career.</p>

            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-sm hover:bg-gray-100">
                <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 19c7 0 10.8-5.8 10.8-10.8v-.5A7.7 7.7 0 0022 5.6a7.6 7.6 0 01-2.2.6 3.8 3.8 0 001.7-2.1 7.6 7.6 0 01-2.4.9A3.8 3.8 0 0012.1 7c0 .3 0 .6.1.9A10.8 10.8 0 013 5.2a3.8 3.8 0 001.2 5.1 3.7 3.7 0 01-1.7-.5v.1c0 1.7 1.2 3.1 2.8 3.4a3.8 3.8 0 01-1.7.1c.5 1.6 2 2.8 3.7 2.8A7.6 7.6 0 012 17.5a10.8 10.8 0 006 1.8" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-sm hover:bg-gray-100">
                <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.1c0-2.2 1.3-3.4 3.3-3.4.96 0 1.97.17 1.97.17v2.2h-1.13c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1v7A10 10 0 0022 12" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-sm hover:bg-gray-100">
                <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.8-1.8 3.6-1.8 3.8 0 4.5 2.4 4.5 5.6V21H18v-5.1c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7V21H9V9z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold text-white">Explore</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="#" className="text-gray-300 hover:text-white">Courses</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">Blog</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">Instructors</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Support</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="#" className="text-gray-300 hover:text-white">Help Center</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">Terms</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">Privacy</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Company</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="#" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">Careers</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">Press</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Get updates</h4>
              <p className="mt-4 text-sm text-gray-300">Subscribe to our newsletter to get the latest course releases and offers.</p>
              <form className="mt-4 flex md:flex-col 2xl:flex-row w-full max-w-sm gap-2">
                
                {/* <input id="email" type="email" placeholder="Your email" className="flex-1 rounded-md border-gray-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /> */}
                <input type="email" placeholder='Your Email' className='px-1 py-1 bg-white text-black outline-blue-600 rounded-md' />
                <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-gray-500 bg-[#012C3F] mt-2">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-300">© {new Date().getFullYear()} Edumon. All rights reserved.</p>
            <div className="flex gap-4 text-sm">
              <Link href="#" className="text-gray-300 hover:text-white">Privacy</Link>
              <Link href="#" className="text-gray-300 hover:text-white">Terms</Link>
              <Link href="#" className="text-gray-300 hover:text-white">Sitemap</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer