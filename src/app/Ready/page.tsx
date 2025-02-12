"use client"
import React, { useState } from 'react'
import Header from '../../layout/header'
import '../../app/index.css'
import Shape from "../../../public/shape"

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
      <div>
        <div className='absolute w-full z-20'>
          <Header/>
        </div>
        <div className='max-w-[700px] h-full mx-auto mt-8 md:mt-16 px-4 md:px-10 py-5 bg-[#041E23] border-[1px] border-[#0E464F] rounded-[20px] md:rounded-[40px] flex flex-col relative top-0'>
          <div className='flex items-center justify-between mb-3 md:mb-[12px] px-4'>
            <h1 className='text-white text-lg md:text-xl'>Ready</h1>
            <p className='text-white'>Step 2/3</p>
          </div>

          {/* Progress Bar */}
          <div className='relative h-1 mb-6 md:mb-8 mx-4'>
            <div className='absolute left-0 top-0 z-10 w-[66%] h-full rounded-md bg-[#24A0B5]'></div>
            <div className='absolute left-0 top-0 w-full h-full rounded-md bg-[#0E464F]'></div>
          </div>

          <div>
            <h1 className='booked'>Your Ticket is Booked!</h1>
            <p className='check'>Check your email for a copy or you can download</p>
          </div>
          
          <div className='pt-[64px]'>
            <div className='relative w-full flex justify-center'>
              <Shape/>
              <div className='absolute inset-0 flex justify-center pt-[24px] items-start'>
                <div className='text-center border border-[#24A0B5] rounded-[16px] w-[260px] h-[446px] pt-[14px]'>
                  <h1 className='text-[#FAFAFA] font-["Road_Rage"] text-[34px] md:text-[42px] font-normal leading-none'>
                    Techember Fest "25
                  </h1>
                  <p className='locate'>📍 04 Rumens road, Ikoyi, Lagos</p>
                  <p className='locate'>📅 March 15, 2025 | 7:00 PM</p>
                  <div className='image w-[140px] h-[140px] mx-auto'>
  <img 
    src="/Praise Afolabi.jpg" 
    alt="ticket" 
    className='w-full h-full object-cover mx-auto rounded-[12px]' 
  />
</div>

<div className='field px-[16px]'>
<div className='w-full '>
  <div className='grid grid-cols-2'>
    <div>
        <p className='opacity-[0.33px] text-[14px]'>Enter your name</p>
        <p>Praise Afolabi</p>
    </div>
    <div>
        <p className='opacity-[0.33px] text-[14px]'>Enter your Email *</p>
        <p>Pafolabi740@gmail.com</p>
    </div>
  </div>

  <div className='border-l-2 border-[#24A0B5] h-[40px] mx-4'></div> {/* Vertical divider */}

  <div className='grid grid-cols-2'>
    <div>
        <p className='opacity-[0.33px] text-[14px]'>Ticket Type:</p>
        <p>VIP</p>
    </div>
    <div>
        <p className='opacity-[0.33px] text-[14px]'>Ticket for :</p>
        <p>1</p>
    </div>
  </div>
</div>

   <div>
    <p>Special request?</p>
    <p>Nil ? Or the users sad story they write in there gets this whole space, Max of three rows</p>
   </div>

</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page