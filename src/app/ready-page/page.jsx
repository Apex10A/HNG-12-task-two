"use client"
import React, { useState } from 'react'
import Header from '../../layout/header'
import '../../app/index.css'
import Shape from "../../../public/shape"
import  {useTicketForm}  from '../../hooks/useTicketForm';

export default function GeneratedTicket() {
  const { formData, goToPreviousStep } = useTicketForm();
  const formatSpecialRequirements = (text) => {
    if (!text) return 'Nil';
    // Limit to roughly 3 lines of text (assuming ~50 chars per line)
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
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
              <Shape className="w-full h-[600px]" />
              <div className='absolute inset-0 flex justify-center pt-[24px] items-start'>
                <div className='text-center border border-[#24A0B5] rounded-[16px] w-[260px] h-[446px] pt-[14px]'>
                  <h1 className='text-[#FAFAFA] font-["Road_Rage"] text-[34px] md:text-[42px] font-normal leading-none'>
                    Techember Fest "25
                  </h1>
                  <p className='locate'>📍 04 Rumens road, Ikoyi, Lagos</p>
                  <p className='locate'>📅 March 15, 2025 | 7:00 PM</p>
                  <div className='image w-[140px] h-[140px] mx-auto'>
                    {formData.avatarUrl ? (
                      <img
                        src={formData.avatarUrl}
                        alt="Attendee"
                        className='w-full h-full object-cover mx-auto rounded-[12px]'
                      />
                    ) : (
                      <div className='w-full h-full bg-[#0E464F] rounded-[12px] flex items-center justify-center'>
                        <span className='text-white'>No Image</span>
                      </div>
                    )}
                  </div>

                  {/* Updated field section with new flex layout and cross divider */}
                  <div className='field space-y-4 px-4'>
                    {/* Name and Email section - flexed horizontally */}
                    <div className='flex justify-between gap-2'>
                      <div className='flex-1 text-left'>
                        <p className='opacity-30 text-[14px] entere'>Enter your name</p>
                        <p className='name'>{formData.fullName}</p>
                      </div>
                      <div className='flex-1 text-left'>
                        <p className='opacity-30 text-[14px] entere'>Enter your Email *</p>
                        <p className='break-words name'>{formData.email}</p>
                      </div>
                    </div>

                    {/* Cross divider */}
                    <div className='relative'>
                      <div className='absolute w-full h-px bg-[#24A0B5] opacity-30 top-1/2 transform -translate-y-1/2'></div>
                      <div className='absolute h-full w-px bg-[#24A0B5] opacity-30 left-1/2 transform -translate-x-1/2'></div>
                    </div>

                    {/* Ticket section - flexed horizontally */}
                    <div className='flex justify-between gap-2'>
                      <div className='flex-1 text-left'>
                        <p className='opacity-30 text-[14px] entere'>Ticket Type:</p>
                        <p className='name'>{formData.ticketType}</p>
                      </div>
                      <div className='flex-1 text-left'>
                        <p className='opacity-30 entere text-[14px]'>Ticket for :</p>
                        <p className='name'>{formData.numberOfTickets}</p>
                      </div>
                    </div>
                    <div className='flex-1 text-left'>
                    <p className='entere opacity-30'>special request</p>
                    <p className='nil'>{formData.specialRequirements}</p>
                  </div>
                  </div>
                  <div className='absolute flex flex-col items-center justify-center mx-auto bottom-5'>
                  <img src="/Bar code.svg" alt="" className='mx-auto flex' />
                </div>
                </div>
              </div>
            </div>
            <div className='flex gap-4 mt-6'>
        <button 
          onClick={() => goToPreviousStep(3)}
          className='flex-1 border border-[#24A0B5] rounded-lg py-3 text-[#24A0B5]'
        >
          Book Another Ticket
        </button>
        <button 
          className='flex-1 bg-[#24A0B5] rounded-lg py-3 text-white'
          onClick={() => window.print()}
        >
          Download Ticket
        </button>
      </div>
          </div>
        </div>
      </div>
    </div>
  )
}

