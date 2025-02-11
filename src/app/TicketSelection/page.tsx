"use client"
import React, { useState } from 'react'
import Header from '../../layout/header'
import '../../app/index.css'

const page = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='background w-full min-h-[130vh] pt-3'>
      <Header/>
      <div className='max-w-[700px] mx-auto mt-8 md:mt-16 px-4 md:px-10 py-5 bg-[#041E23] border-[1px] border-[#0E464F] rounded-[20px] md:rounded-[40px] flex flex-col'>
        {/* Header Section */}
        <div className='flex items-center justify-between mb-3 md:mb-[12px] px-4'>
          <h1 className='text-white text-lg md:text-xl'>Attendee Details</h1>
          <p className='text-white'>Step 2/3</p>
        </div>

        {/* Progress Bar */}
        <div className='relative h-1 mb-6 md:mb-8 mx-4'>
          <div className='absolute left-0 z-10 top-0 w-[66%] h-full rounded-md bg-[#24A0B5]'></div>
          <div className='absolute left-0 top-0 w-full h-full rounded-md bg-[#0E464F]'></div>
        </div>

        {/* Main Content Container */}
        <div className='rounded-[16px] md:rounded-[32px] border border-[#0E464F] bg-[#08252B] flex-1 mx-4'>
          <div className='p-6 md:p-8 flex flex-col gap-8'>
            {/* Profile Image Upload Section */}
            <div className='bg-[#052228] border border-[#07373F] rounded-[24px] p-6 md:p-8'>
              <h2 className='text-white text-lg mb-6 '>Upload Profile Photo</h2>
              <div className='flex justify-center items-center min-h-[240px] dark'>
                <div className='bg-[#0E464F] w-full max-w-[240px] h-[240px] rounded-[32px] flex items-center justify-center p-4'>
                  <div className='text-center'>
                    <p className='text-white text-sm md:text-base'>
                      Drag & drop or click to upload
                    </p>
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className='hidden'
                      id='file-upload'
                      accept='image/*'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className='h-[1px] bg-[#07373F] w-full'></div>

            {/* Form Fields */}
            <div className='space-y-6 w-full max-w-[600px] mx-auto'>
              {/* Name Input */}
              <div className='space-y-2'>
                <label htmlFor="name" className='text-[#FAFAFA] block'>
                  Enter your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className='w-full bg-transparent text-[#FAFAFA] border border-[#07373F] rounded-lg p-3 md:p-4 focus:outline-none focus:border-[#24A0B5]'
   
                />
              </div>

              {/* Email Input */}
              <div className='space-y-2'>
                <label htmlFor="email" className='text-[#FAFAFA] block'>
                  Enter your email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className='w-full bg-transparent text-[#FAFAFA] border border-[#07373F] rounded-lg p-3 md:p-4 focus:outline-none focus:border-[#24A0B5]'
                  placeholder=''
                />
              </div>

              {/* Special Requirements Textarea */}
              <div className='space-y-2'>
                <label htmlFor="requirements" className='text-[#FAFAFA] block'>
                About the project
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows={4}
                  className='w-full bg-transparent text-[#FAFAFA] border border-[#07373F] rounded-lg p-3 md:p-4 focus:outline-none focus:border-[#24A0B5] resize-none'
                  placeholder='Textarea'
                />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className='flex flex-col md:flex-row gap-4 md:gap-8 mt-6'>
              <button className='flex-1 border border-[#24A0B5] rounded-lg py-3 text-[#24A0B5] hover:bg-[#24A0B5]/10 transition-colors'>
                Back
              </button>
              <button className='flex-1 bg-[#24A0B5] rounded-lg py-3 text-white hover:bg-[#1B7A8C] transition-colors'>
                Get My Free Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page