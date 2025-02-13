"use client"
import React, { useState, useEffect } from 'react'
import Header from '../../layout/header'
import '../../app/index.css'
import Shape from "../../../public/shape"
import { useTicketForm } from '../../hooks/useTicketForm'
import ReactConfetti from 'react-confetti'

export default function GeneratedTicket() {
  const { formData, goToPreviousStep } = useTicketForm()
  const [showConfetti, setShowConfetti] = useState(true)
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  })
  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Set initial dimensions
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Clean up
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Stop confetti after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const formatSpecialRequirements = (text) => {
    if (!text) return 'Nil'
    return text.length > 150 ? text.substring(0, 150) + '...' : text
  }

  return (
    <div className='pb-[24px] px-[20px] md:px-auto'>
      {showConfetti && (
        <ReactConfetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={true}
          numberOfPieces={200}
          gravity={0.3}
          colors={['#24A0B5', '#FAFAFA', '#0E464F', '#041E23']}
        />
      )}
      <div>
        <div className='md:absolute w-full z-20'>
        </div>
        <div className='max-w-[700px] mx-auto mt-[48px] md:mt-16 px-[24px] md:px-10 py-[32px] bg-[#041E23] border-[1px] border-[#0E464F] rounded-[20px] md:rounded-[40px] flex flex-col relative top-0'>
          <div className='flex items-center justify-between ticket-selection mb-3 md:mb-[12px]'>
            <h1 className='text-white text-[24px] pb-[12px] md:pb-0 md:text-[32px]'>Ready</h1>
            <p className='text-white font-["Roboto"]'>Step 3/3</p>
          </div>

          {/* Progress Bar */}
          <div className='relative h-1 mb-6 md:mb-8'>
            <div className='absolute left-0 top-0 z-10 w-[100%] h-full rounded-md bg-[#24A0B5]'></div>
            <div className='absolute left-0 top-0 w-full h-full rounded-md bg-[#0E464F]'></div>
          </div>

          <div>
            <h1 className='booked text-[24px] md:text-[32px]'>Your Ticket is Booked!</h1>
            <p className='check font-["Roboto"]'>Check your email for a copy or you can download</p>
          </div>
          
          <div className='pt-[64px]'>
            <div className='relative w-full flex justify-center'>
              <Shape className="w-full h-[600px]" />
              <div className='absolute inset-0 flex justify-center pt-[24px] items-start'>
                <div className='text-center border border-[#24A0B5] rounded-[16px] w-[260px] h-[446px] pt-[14px]'>
                  <h1 className='text-[#FAFAFA] font-["Road_Rage"] text-[34px] md:text-[42px] font-normal leading-none pb-2'>
                    Techember Fest "25
                  </h1>
                  <p className='locate pb-1'>📍 04 Rumens road, Ikoyi, Lagos</p>
                  <p className='locate'>📅 March 15, 2025 | 7:00 PM</p>
                  <div className='image my-[20px] w-[140px] h-[140px] mx-auto'>
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
                  <div className='field mx-[14px] p-[8px]'>
                    {/* Name and Email section - flexed horizontally */}
                    <div className='flex justify-between items-center'>
                      <div className='flex-1 text-left'>
                        <p className='opacity-30 text-[14px] entere pb-[4px] font-["Roboto"]'>Enter your name</p>
                        <p className='name font-["Roboto"] pb-[4px]'>{truncateText(formData.fullName, 12)}</p>
                      </div>
                      <div className='flex-1 text-left'>
                        <p className='opacity-30 text-[14px] entere font-[400] pb-[4px] font-["Roboto"]'>Enter your Email *</p>
                        <p className='break-words name font-["Roboto"] pb-[4px]'> {truncateText(formData.email, 9)}</p>
                      </div>
                    </div>

                   {/* Cross divider */}
<div className='relative '> {/* Added specific height */}
  <div className='absolute w-full h-px bg-[#24A0B5] opacity-30 top-1/2 transform -translate-y-1/2'></div>
  <div className='absolute h-[82px] top-[-40px] w-px bg-[#24A0B5] opacity-30 left-[45%] transform -translate-x-1/2'></div>
  <div className='absolute w-full h-px bg-[#24A0B5] opacity-30 top-[42px] transform -translate-y-1/2'></div>
</div>
                    {/* Ticket section - flexed horizontally */}
                    <div className='flex justify-between gap-2'>
                      <div className='flex-1 text-left'>
                        <p className='opacity-30 text-[14px] entere font-[400] pb-[4px] pt-[4px] font-["Roboto"]'>Ticket Type:</p>
                        <p className='name font-["Roboto"]'>{formData.ticketType}</p>
                      </div>
                      <div className='flex-1 text-left'>
                        <p className='opacity-30 text-[14px] entere font-[400] pb-[4px] pt-[4px] font-["Roboto"]'>Ticket for :</p>
                        <p className='name font-["Roboto"]'>{formData.numberOfTickets}</p>
                      </div>
                    </div>
                    <div className='flex-1 text-left pt-[8px]'>
                      <p className='opacity-30 text-[14px] entere font-[400] pb-[4px] font-["Roboto"]'>special request</p>
                      <p className='nil font-["Roboto"] font-[400] leading-8 text-[10px]'>{formData.specialRequirements}</p>
                    </div>
                  </div>

                  
                  <div className='absolute flex flex-col items-center justify-center mx-auto bottom-5 '>
                    <img src="/BarCode.svg" alt="" className='mx-auto flex items-center justify-center relative bottom-0 ml-3' />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row gap-4 mt-[56px] mb-[48px]'>
              <button 
                onClick={() => goToPreviousStep(3)}
                className='flex-1 border border-[#24A0B5] rounded-lg py-3 text-[#24A0B5] font-["JejuMyeongjo"] font-[400] text-[16px]'
              >
                Book Another Ticket
              </button>
              <button 
                className='flex-1 bg-[#24A0B5] rounded-lg py-3 text-white font-["JejuMyeongjo"] font-[400] text-[16px]'
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