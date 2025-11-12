'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Container from '@/utils/Container'
import { usePathname } from 'next/navigation'

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'About', href: '/about' },
  { label: 'Instructors', href: '/instructors' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

interface mobilePropsType{
  onClose: () => void 
  pathname:string
}

function Navbar() {
  const pathname = usePathname()
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobile(false)
    }
    if (mobile) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [mobile])

  return (
    <header className="w-full bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 3L1 9l11 6 9-4.909V17h2V9L12 3z" fill="currentColor" />
                  <path d="M11 12.13V21h2v-8.87" fill="#ffffff" opacity="0.9" />
                </svg>
              </span>
              <span className="text-2xl font-semibold text-gray-900">Edumon</span>
            </Link>
          </div>
          <nav className="hidden lg:flex lg:gap-8 text-sm md:text-base font-medium" aria-label="Primary navigation">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`${pathname === l.href ? 'text-blue-600' : 'text-gray-700'} hover:text-gray-900`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex md:items-center md:gap-4">
              <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900">Login</Link>
              <Link href="/register" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">Register</Link>
            </div>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobile}
              onClick={() => setMobile((s) => !s)}
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100"
            >
              {mobile ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>
      {mobile && <MobileMenu onClose={() => setMobile(false)} pathname={pathname} />}
    </header>
  )
}

function MobileMenu({ onClose, pathname }:mobilePropsType) {
  return (
    <div className="lg:hidden fixed inset-0 z-50 flex">
      <button aria-hidden className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative ml-auto w-72 max-w-full transform
       bg-white p-6 shadow-2xl transition-transform">
        <div className="flex items-center justify-end">
          <button onClick={onClose} aria-label="Close menu" className="rounded-full p-1 text-gray-600 hover:bg-gray-100">
            <X />
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-4 text-base font-medium">
          {LINKS.map((l) => (
            <Link key={l.label} href={l.href} onClick={onClose} className={`${pathname === l.href ? 'text-blue-600' : 'text-gray-700'} block py-2 hover:text-gray-900`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 border-t pt-6">
          <div className="flex flex-col gap-3">
            <Link href="/login" onClick={onClose} className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Login</Link>
            <Link href="/register" onClick={onClose} className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar