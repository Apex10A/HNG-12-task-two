"use client"
import React from 'react'
import './index.css'
import TicketSelection from './ticket-selection/page'
import Ready from './ready-page/page'
import Header from '../layout/header'
import './index.css'
import  { useTicketForm }  from '../hooks/useTicketForm';

export default function Homer() {
  const { formData, handleInputChange, errors, goToNextStep } = useTicketForm();
  
  return (
    <div className='background w-full min-h-[130vh] pt-3'>
    <Header/>
    <div className='max-w-[700px] mx-auto mt-8 md:mt-16 px-[48px] md:px-10 py-[48px] h-full bg-[#041E23] border-[1px] border-[#0E464F] rounded-[20px] md:rounded-[40px]'>
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
      <div className='rounded-[16px] md:rounded-[32px] w-[604px] h-[682px] border border-[#0E464F] bg-[#08252B] pt-6 md:pt-[24px] flex flex-col gap-6 md:gap-8 mb-6 md:mb-8'>
        <div className='mx-4 md:mx-[24px]'>
          <div className='rounded-[20px] md:rounded-[24px] border-r-2 border-b-2 border-l-2 border-[#07373F] h-auto md:h-[200px] p-4 md:py-6 flex flex-col items-center gap-2 bg'>
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
          <div className='h-1 bg-[#07373F]  my-6 md:my-[32px]'></div>
          <div>
            <h2 className='select'>Select Ticket Type:</h2>
            <div className='h-[142px] w-full bg-[#052228] border border-[#07373F] rounded-[24px] flex items-center px-[16px] gap-[32px]'>
              <div className='border border-[#197686] bg-[#12464E] rounded-[12px] p-[12px] w-[158px] h-[110px]'>
                <p className='free'>Free</p>
                <p className='uppercase reg pt-[12px]'>Regular Access</p>
                <p className='num'>20/52</p>
              </div>
              <div className='border-[2px] border-[#197686] bg-transparent rounded-[12px] p-[12px]  w-[158px] h-[110px]'>
              <p className='free'>$150</p>
                <p className='uppercase reg pt-[12px]'>VIP Access </p>
                <p className='num'>20/52</p>
              </div>
              <div className='border-[2px] border-[#197686] bg-transparent rounded-[12px] p-[12px] w-[158px] h-[110px]'>
              <p className='free'>$150</p>
                <p className='uppercase reg pt-[12px]'>VVIP Access </p>
                <p className='num'>20/52</p>
              </div>
              </div>
            </div>
          </div>
          {/* <select 
        name="ticketType"
        value={formData.ticketType}
        onChange={handleInputChange}
        aria-label="Select ticket type"
        className='w-full bg-transparent text-[#FAFAFA] border border-[#197686] rounded-lg p-3'
      >
        <option value="">Select ticket type</option>
        <option value="regular">Regular Access</option>
        <option value="vip">VIP Access</option>
        <option value="vvip">VVIP Access</option>
      </select>
      {errors.ticketType && (
        <p className="text-red-500 text-sm mt-1" role="alert">{errors.ticketType}</p>
      )} */}
<div className='mx-4 md:mx-[24px]'>
  <p className='select mb-2'>Number of Tickets</p>
<select 
        name="numberOfTickets"
        value={formData.numberOfTickets}
        onChange={handleInputChange}
        aria-label="Number of tickets"
        className='w-full bg-transparent text-[#FAFAFA] border border-[#07373F] p-[12px] rounded-[12px]'
      >
        {[1, 2, 3, 4, 5].map(num => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
</div>

      <div className='flex gap-4 px-[24px] pb-[24px]'>
      <button 
          onClick={() => goToNextStep(1)}
          className='flex-1 bg-transparent border border-[#24A0B5] rounded-lg py-3 text-[#24A0B5]'
        >
          Cancel
        </button>
        <button 
          onClick={() => goToNextStep(1)}
          className='flex-1 bg-[#24A0B5] rounded-lg py-3 text-white'
        >
          Next
        </button>
      </div>
        </div>
      </div>
    </div>
  )
}
