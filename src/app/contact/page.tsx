'use client'
import PageHeader from '@/components/utils/PageHeader'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Container from '@/utils/Container'
import { useAppDispatch, useAppSelector } from '@/redux/hook/hooks'
import { ContactMessage } from '@/types/contact'
import { message } from '@/redux/feature/contactSlice'

function Contact() {
  const {success} = useAppSelector(state=>state.contact)
  const dispatch = useAppDispatch()
    const pathname = usePathname()
    const path = pathname.slice(1)
    const [formData, setFormData] = useState<ContactMessage>({
        name: '',
        email: '',
        subject: '',
        phone:"",
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(message(formData))
        console.log(success);
        
        setFormData({
            name: '',
            email: '',
            subject: '',
            phone:"",
            message: ''
        })

    }

  return (
    <div>
        <PageHeader path={path}/>
        
        <Container>
            <section className='py-16 px-4 md:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
                    {/* Contact Info Cards */}
                    <div className='flex flex-col gap-6'>
                        {/* For any Query Card */}
                        <div className='bg-blue-600 rounded-lg p-8 text-white'>
                            <div className='text-4xl mb-4'>📞</div>
                            <h3 className='text-xl font-bold mb-3'>For any Query?</h3>
                            <p className='text-sm'>Free +68 (025)-9875</p>
                            <p className='text-sm'>Free +68 (026)-9879</p>
                        </div>

                        {/* Write Email Card */}
                        <div className='bg-blue-600 rounded-lg p-8 text-white'>
                            <div className='text-4xl mb-4'>✉️</div>
                            <h3 className='text-xl font-bold mb-3'>Write email Us</h3>
                            <p className='text-sm'>admin@example.com</p>
                            <p className='text-sm'>support@example.com</p>
                        </div>

                        {/* Visit anytime Card */}
                        <div className='bg-blue-600 rounded-lg p-8 text-white'>
                            <div className='text-4xl mb-4'>📍</div>
                            <h3 className='text-xl font-bold mb-3'>Visit anytime</h3>
                            <p className='text-sm'>427 Hall Place</p>
                            <p className='text-sm'>Longview, Texas</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='flex flex-col justify-center'>
                        <div className='bg-gray-50 rounded-lg p-8 md:p-10'>
                            <div className='mb-8'>
                                <p className='text-blue-600 font-semibold mb-2'>Send us email</p>
                                <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Feel Free to write</h2>
                            </div>

                            <form onSubmit={handleSubmit} className='space-y-4'>
                                {/* Name and Email Row */}
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Enter Name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500'
                                        required
                                    />
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Enter Email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500'
                                        required
                                    />
                                </div>

                                {/* Subject and Phone Row */}
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <input
                                        type='text'
                                        name='subject'
                                        placeholder='Enter Subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500'
                                        required
                                    />
                                    <input
                                        type='tel'
                                        name='phone'
                                        placeholder='Enter Phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500'
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <textarea
                                    name='message'
                                    placeholder='Enter Message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className='w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-500 resize-none'
                                    required
                                ></textarea>

                                {/* Submit Button */}
                                <div className='pt-4'>
                                    <button
                                        type='submit'
                                        className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300 ease-in-out'
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    </div>
  )
}

export default Contact