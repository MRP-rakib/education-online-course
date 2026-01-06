'use client'
import PageHeader from '@/components/utils/PageHeader'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Container from '@/utils/Container'
import { useAppDispatch, useAppSelector } from '@/redux/hook/hooks'
import { login } from '@/redux/feature/loginSlice'

function Login() {
  const pathname = usePathname()
  const path = pathname.slice(1)
  const route= useRouter()
  const {success,loading,error} = useAppSelector(state=>state.login)
     const dispatch = useAppDispatch()
  
  

  const [form, setForm] = useState({ username: '', password: '', remember: false })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    if (type === 'checkbox') {
      setForm(prev => ({ ...prev, [name]: checked }))
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
     dispatch(login(form))
       console.log(success);
  }
useEffect(()=>{
   if (success){
    route.push('/')
   }
},[success,route])
  return (
  <div>
    <PageHeader path={path}/>

    <Container>
      <section className='py-16 px-4 md:px-8'>
        <div className='max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>Already A Member? Sign In:</h2>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-sm text-gray-700 mb-2'>Username</label>
              <input
                name='username'
                value={form.username}
                onChange={handleChange}
                placeholder='Enter Username'
                className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />
            </div>

            <div>
              <label className='block text-sm text-gray-700 mb-2'>Password</label>
              <input
                name='password'
                type='password'
                value={form.password}
                onChange={handleChange}
                placeholder='Enter Password'
                className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />
            </div>

            <div className='flex items-center gap-3'>
              <input
                id='remember'
                name='remember'
                type='checkbox'
                checked={form.remember as boolean}
                onChange={handleChange}
                className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
              />
              <label htmlFor='remember' className='text-sm text-gray-700'>Remember Password</label>
            </div>
{error &&
                <p className='text-red-600'>{error}</p>}
              {success &&
                <p className='text-green-600'>{success}</p>
              }
            <div>
              <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-colors'>
                {loading?'login...':'login'}
              </button>
            </div>

            <p className='text-center text-sm text-gray-600'>Don&apos;t have an account? <a href='/register' className='text-blue-600 font-semibold'>Register Now</a></p>
          </form>
        </div>
      </section>
    </Container>
  </div>
  )
}

export default Login