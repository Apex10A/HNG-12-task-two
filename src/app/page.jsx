"use client"
import React, { useState, useEffect } from 'react'
import './index.css'
import Header from '../layout/header'
import { useTicketForm } from '../hooks/useTicketForm'

export default function Homer() {
  const { formData, handleInputChange, errors, goToNextStep } = useTicketForm()
  const [selectedTicket, setSelectedTicket] = useState(formData.ticketType || null)

  const ticketTypes = [
    { type: 'regular', price: 'Free', name: 'Regular Access', available: '20/52' },
    { type: 'vip', price: '$150', name: 'VIP Access', available: '20/52' },
    { type: 'vvip', price: '$150', name: 'VVIP Access', available: '20/52' }
  ]

  const handleTicketSelect = (ticketType) => {
    setSelectedTicket(ticketType)
    handleInputChange({
      target: {
        name: 'ticketType',
        value: ticketType
      }
    })
  }
  useEffect(() => {
    if (formData.ticketType) {
      setSelectedTicket(formData.ticketType)
    }
  }, [formData.ticketType])

  const handleNext = () => {
    if (!selectedTicket) {
      // Add error handling for ticket type
      handleInputChange({
        target: {
          name: 'ticketType',
          value: ''
        }
      })
      return
    }
    goToNextStep(1)
  }

  return (
    <div className='pb-[24px] px-[20px] md:px-auto'>
      <div className='max-w-[700px] mx-auto mt-8 md:mt-16 md:px-[48px] px-[24px] pt-[48px] h-full bg-[#041E23] border-[1px] border-[#0E464F] rounded-[20px] md:rounded-[40px]'>
        <div className='md:flex items-center justify-between ticket-selection mb-3 md:mb-[12px]'>
          <h1 className='text-white text-[24px] pb-[12px] md:pb-0 md:text-xl'>Ticket Selection</h1>
          <p className='text-white font-["Roboto"] font-[400] text-[16px]'>Step 1/3</p>
        </div>

        {/* Progress Bar */}
        <div className='relative h-1 mb-6 md:mb-8 flex items-center'>
          <div className='absolute left-0 z-10 top-0 w-[33%] h-full rounded-md bg-[#24A0B5]'></div>
          <div className='absolute left-0 top-0 w-full h-full rounded-md bg-[#0E464F]'></div>
        </div>

        {/* Event Card Container */}
        <div className='rounded-[16px] md:rounded-[32px] w-full md:border md:border-[#0E464F] md:bg-[#08252B] pt-6 md:pt-[24px] flex flex-col gap-6 md:gap-8 mb-6 md:mb-[48px]'>
          <div className='md:mx-[24px]'>
            {/* Event Details Section */}
            <div className='rounded-[20px] md:rounded-[24px] border-r-2 border-b-2 border-l-2 border-[#07373F] h-[243px] md:h-[200px] p-4 md:py-6 flex flex-col items-center gap-2 bg'>
              <h1 className='text-[#FAFAFA] text-center font-["Road_Rage"] text-[42px] sm:text-[48px] md:text-[62px] font-normal leading-none'>
                Techember Fest "25
              </h1>
              <p className='text-[#FAFAFA] text-center font-roboto text-[14px] md:text-base font-normal leading-[150%] w-full md:max-w-[60%] join'>
                Join us for an unforgettable experience at [Event Name]! Secure your spot now.
              </p>
              <div className='flex flex-col md:flex-row gap-2 md:gap-3 items-center text-center md:text-left'>
                <p className='text-[#FAFAFA] font-roboto text-sm md:text-base font-normal leading-[150%] pt-[24px] md:pt-0'>
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
            <div className='h-1 bg-[#07373F] my-[32px]'></div>

            {/* Ticket Selection Section */}
            <div>
              <h2 className='select mb-4'>Select Ticket Type:</h2>
              <div className='h-auto min-h-[142px] w-full bg-[#052228] border border-[#07373F] rounded-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center p-[16px] gap-[16px] md:gap-[16px]'>
                {ticketTypes.map((ticket) => (
                  <div
                    key={ticket.type}
                    onClick={() => handleTicketSelect(ticket.type)}
                    className={`cursor-pointer border  ${
                      selectedTicket === ticket.type
                        ? 'border-[#197686] bg-[#12464E]'
                        : 'border-[#197686] bg-transparent hover:bg-[#12464E]/50'
                    } rounded-[12px] p-[12px] w-full lg:w-[158px] h-[110px] transition-colors`}
                  >
                    <p className='free font-["Roboto"]'>{ticket.price}</p>
                    <p className='uppercase reg pt-[12px] font-["Roboto"]'>{ticket.name}</p>
                    <p className='num'>{ticket.available}</p>
                  </div>
                ))}
              </div>
              {errors.ticketType && (
                <p className="text-red-500 text-sm mt-2" role="alert">{errors.ticketType}</p>
              )}
            </div>
          </div>

          {/* Number of Tickets Selection */}
          <div className=' md:mx-[24px]'>
            <p className='select mb-2'>Number of Tickets</p>
            <select 
              name="numberOfTickets"
              value={formData.numberOfTickets}
              onChange={handleInputChange}
              aria-label="Number of tickets"
              className='w-full bg-transparent font-["Roboto"] text-[#FAFAFA] border border-[#07373F] p-[12px] rounded-[12px]  focus:outline-none focus:border-[#24A0B5] focus:ring-1 focus:ring-[#24A0B5]'
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col-reverse md:flex-row gap-4 w-full md:px-[24px] pb-[24px]'>
  <button 
    onClick={() => window.location.href = '/'}
    className='w-full md:flex-1 bg-transparent border border-[#24A0B5] rounded-lg py-3 text-[#24A0B5] font-["JejuMyeongjo"] font-[400] text-[16px]'
  >
    Cancel
  </button>
  <button 
    onClick={handleNext}
    className='w-full md:flex-1 bg-[#24A0B5] rounded-lg py-3 text-white disabled:opacity-50 font-["JejuMyeongjo"] font-[400] text-[16px]'
    // disabled={selectedTicket === null || selectedTicket === ''}
  >
    Next
  </button>
</div>
        </div>
      </div>
    </div>
  )
}