import Container from '@/utils/Container';
import React from 'react'

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 py-8 text-center">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">{icon}</div>
      <div className="text-3xl font-extrabold text-white md:text-4xl">{value}</div>
      <div className="text-sm text-white/90">{label}</div>
    </div>
  )
}

function OurImpact() {
  return (
    <section className="w-full bg-blue-600">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <StatCard
            icon={(
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            )}
            value="28k+"
            label="Total Students"
          />

          <StatCard
            icon={(
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4 6h16v12H4z" opacity="0.2"/>
                <path d="M20 4H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1zm-1 12H5V6h14v10zM7 8h6v2H7z" />
              </svg>
            )}
            value="529+"
            label="Total Courses"
          />

          <StatCard
            icon={(
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3.5C23 14.17 18.33 13 16 13z" />
              </svg>
            )}
            value="70k+"
            label="Expert Instructors"
          />

          <StatCard
            icon={(
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M21 10v6.5A2.5 2.5 0 0118.5 19H5.5A2.5 2.5 0 013 16.5V10" opacity="0.2"/>
                <path d="M12 3l2.39 4.85L19 9.17l-3.5 3.18L16.8 17 12 14.77 7.2 17l1.3-4.65L5 9.17l4.61-.32L12 3z" />
              </svg>
            )}
            value="50k+"
            label="Awards Won"
          />
        </div>
      </Container>
    </section>
  )
}

export default OurImpact