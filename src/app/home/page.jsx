import React from 'react'
import Header from '../../layout/header'
import '../../app/index.css'

const page = () => {
  return (
    <div className='background w-full min-h-[130vh] pt-3'>
      <Header/>
      <div className='max-w-[700px] mx-auto mt-8 md:mt-16 px-4 md:px-10 py-5 h-full bg-[#041E23] border-[1px] border-[#0E464F] rounded-[20px] md:rounded-[40px]'>
        <div className='flex items-center justify-between ticket-selection mb-3 md:mb-[12px]'>
          <h1 className='text-white text-lg md:text-xl'>Ticket Selection</h1>
          <p className='text-white'>Step 1/3</p>
        </div>

        {/* Progress Bar */}
        <div className='relative h-1 mb-6 md:mb-8 flex items-center'>
          <div className='absolute left-0 z-10 top-0 w-[232px] h-full rounded-md bg-[#24A0B5]'></div>
          <div className='absolute left-0 top-0 w-full h-full rounded-md bg-[#0E464F]'></div>
        </div>

        {/* Event Card Container */}
        <div className='rounded-[16px] md:rounded-[32px] border border-[#0E464F] bg-[#08252B] pt-6 md:pt-[32px] flex flex-col gap-6 md:gap-8 mb-6 md:mb-8'>
          <div className='mx-4 md:mx-[24px]'>
            <div className='rounded-[20px] md:rounded-[40px] border-r-2 border-b-2 border-l-2 border-[#07373F] h-auto md:h-[200px] p-4 md:p-6 flex flex-col items-center gap-2 bg'>
              <h1 className='text-[#FAFAFA] text-center font-["Road_Rage"] text-4xl md:text-[62px] font-normal leading-none'>
                Techember Fest "25
              </h1>
              <p className='text-[#FAFAFA] text-center font-roboto text-sm md:text-base font-normal leading-[150%] w-full md:max-w-[60%] join'>
                Join us for an unforgettable experience at [Event Name]! Secure your spot now.
              </p>
              <div className='flex flex-col md:flex-row gap-2 md:gap-3 items-center text-center md:text-left'>
                <p className='text-[#FAFAFA] font-roboto text-sm md:text-base font-normal leading-[150%]'>
                  📍 [Event Location]
                </p>
                <p className='text-[#FAFAFA] hidden md:block font-roboto text-base font-normal leading-[150%]'>
                  | |
                </p>
                <p className='text-[#FAFAFA] font-roboto text-sm md:text-base font-normal leading-[150%]'>
                  March 15, 2025 | 7:00 PM
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className='h-1 bg-[#07373F] mx-4 md:mx-[24px] my-6 md:my-[32px]'></div>

            {/* Ticket Selection */}
            <div className='space-y-4'>
              <p className='text-[#FAFAFA] font-roboto text-sm md:text-base font-normal leading-[150%]'>
                Select Ticket Type:
              </p>
              
              {/* Ticket Options Container */}
              <div className='grid grid-cols-1 md:grid-cols-2 rounded-2xl md:rounded-3xl border border-[#07373F] bg-[#052228] p-4 md:p-[16px] gap-4'>
                {/* Regular Access Ticket */}
                <div className='max-w-full md:max-w-[242px] flex flex-col justify-center h-[68px] px-3 md:px-[8px] items-start rounded-xl border border-[#197686] bg-[#197686]'>
                  <div className='flex items-center justify-between w-full'>
                    <p className='text-[#FAFAFA] font-roboto text-sm md:text-base font-normal uppercase'>
                      Regular Access
                    </p>
                    <div className='w-16 md:w-20 p-2 h-[38px] flex items-center relative justify-center rounded-lg border border-[#2BA4B9] bg-[#0E464F]'>
                      <p className='text-[#FAFAFA] absolute text-base md:text-[20px] dollar font-[600]'>Free</p>
                    </div>
                  </div>
                  <p className='text-[#FAFAFA] text-xs md:text-sm font-roboto'>
                    20 left!
                  </p>
                </div>

                {/* VIP Access Ticket */}
                <div className='max-w-full md:max-w-[242px] flex flex-col justify-center h-[68px] px-3 md:px-[10px] py-[12px] items-start rounded-xl border border-[#07373F] bg-transparent'>
                  <div className='flex items-center justify-between w-full pt-2'>
                    <p className='text-[#FAFAFA] font-roboto text-sm md:text-base font-normal uppercase'>
                      VIP Access
                    </p>
                    <div className='w-16 md:w-20 p-2 h-[38px] flex items-center relative justify-center rounded-lg border border-[#2BA4B9] bg-[#0E464F]'>
                      <p className='text-[#FAFAFA] absolute text-base md:text-[20px] dollar font-[600]'>$50</p>
                    </div>
                  </div>
                  <p className='text-[#FAFAFA] text-xs md:text-sm font-roboto'>
                    20 left!
                  </p>
                </div>

                {/* VVIP Access Ticket */}
                <div className='max-w-full md:max-w-[242px] flex flex-col justify-center h-[68px] px-3 md:px-[8px] items-start rounded-xl border border-[#07373F] bg-transparent'>
                  <div className='flex items-center justify-between w-full'>
                    <p className='text-[#FAFAFA] font-roboto text-sm md:text-base font-normal uppercase'>
                      VVIP Access
                    </p>
                    <div className='w-16 md:w-20 p-2 h-[38px] flex items-center relative justify-center rounded-lg border border-[#2BA4B9] bg-[#0E464F]'>
                      <p className='text-[#FAFAFA] absolute text-base md:text-[20px] dollar font-[600]'>$150</p>
                    </div>
                  </div>
                  <p className='text-[#FAFAFA] text-xs md:text-sm font-roboto'>
                    20 left!
                  </p>
                </div>
              </div>
            </div>

            {/* Number of Tickets */}
            <div className='pt-6 md:pt-8'>
              <p className='text-[#FAFAFA] font-roboto text-sm md:text-base font-normal leading-[150%] mb-2'>
                Number of Tickets
              </p>
              <div className='relative'>
                <select 
                  className='w-full bg-transparent text-[#FAFAFA] border border-[#197686] rounded-lg p-3 md:p-[12px] appearance-none cursor-pointer text-sm md:text-base'
                  defaultValue="1"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num} className='bg-[#0E464F]'>
                      {num}
                    </option>
                  ))}
                </select>
                <div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none'>
                  <svg 
                    width="12" 
                    height="8" 
                    viewBox="0 0 12 8" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M1 1.5L6 6.5L11 1.5" 
                      stroke="#FAFAFA" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className='foot mt-6 md:mt-[32px] mb-6 md:mb-[24px] flex flex-col md:flex-row items-center px-4 md:px-[48px] gap-4 md:gap-[48px]'>
              <button className='border border-[#24A0B5] rounded-[8px] px-[12px] py-[12px] text-[#24A0B5] w-full korea'>
                Cancel
              </button>
              <button className='rounded-[8px] bg-[#24A0B5] px-[12px] py-[12px] w-full korea'>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page