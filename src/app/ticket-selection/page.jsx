"use client"
import React, { useState, useRef, useEffect } from 'react'
import Header from '../../layout/header'
import '../../app/index.css'
import { useTicketForm } from '../../hooks/useTicketForm'
import { uploadToCloudinary } from '../../lib/cloudinary'

export default function AttendeeDetails() {
  const [mounted, setMounted] = useState(false)
  const { formData, handleInputChange, errors, goToNextStep, goToPreviousStep, setFormData, validateForm } = useTicketForm()
  const fileInputRef = useRef(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  useEffect(() => {
    setMounted(true)
    setPreviewUrl(formData.avatarUrl || null)
  }, [formData.avatarUrl])

  const triggerFileInput = () => {
    if (!isSubmitting) {
      fileInputRef.current?.click()
    }
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0]
    if (file) {
      try {
        setIsSubmitting(true)
        setUploadProgress(0)
        
        // Simulate upload progress
        const progressInterval = setInterval(() => {
          setUploadProgress(prev => {
            if (prev >= 90) {
              clearInterval(progressInterval)
              return 90
            }
            return prev + 10
          })
        }, 300)

        const imageUrl = await uploadToCloudinary(file)
        
        clearInterval(progressInterval)
        setUploadProgress(100)
        setPreviewUrl(imageUrl)
        setFormData(prev => ({ ...prev, avatarUrl: imageUrl }))

        // Reset progress after a brief delay
        setTimeout(() => {
          setUploadProgress(0)
        }, 500)
      } catch (error) {
        console.error('Upload failed:', error)
        setUploadProgress(0)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleNext = async () => {
    if (isSubmitting) {
      return // Don't proceed if still processing image
    }
    
    const isValid = validateForm(2)
    if (isValid) {
      try {
        await goToNextStep(2)
      } catch (error) {
        console.error('Navigation failed:', error)
      }
    }
  }

  const LoadingOverlay = () => (
    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center rounded-[32px]">
      <div className="w-16 h-16 mb-4 relative">
        <div className="absolute inset-0 border-4 border-[#24A0B5]/30 rounded-full"></div>
        <div 
          className="absolute inset-0 border-4 border-[#24A0B5] rounded-full border-t-transparent animate-spin"
        ></div>
      </div>
      <p className="text-white text-sm font-medium">
        {uploadProgress < 100 ? 'Uploading...' : 'Processing...'}
      </p>
      {uploadProgress > 0 && (
        <div className="w-2/3 bg-[#0E464F] rounded-full h-2 mt-2">
          <div 
            className="bg-[#24A0B5] h-2 rounded-full transition-all duration-300"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
    </div>
  )

  if (!mounted) {
    return null // or a loading skeleton
  }

  return (
    <div className='pb-[24px] px-[20px] md:px-auto'>
      <div className='max-w-[700px] mx-auto mt-[32px] h-full md:px-[48px] px-10 py-[48px] bg-[#041E23] border-[1px] border-[#0E464F] rounded-[20px] md:rounded-[40px] flex flex-col'>
        {/* Header Section */}
        <div className='flex items-center justify-between ticket-selection mb-3 md:mb-[12px]'>
          <h1 className='text-white text-lg md:text-xl'>Attendee Details</h1>
          <p className='text-white font-["Roboto"]'>Step 2/3</p>
        </div>

        {/* Progress Bar */}
        <div className='relative h-1 mb-6 md:mb-8'>
          <div className='absolute left-0 z-10 top-0 w-[66%] h-full rounded-md bg-[#24A0B5]'></div>
          <div className='absolute left-0 top-0 w-full h-full rounded-md bg-[#0E464F]'></div>
        </div>

        {/* Main Content Container */}
        <div className='rounded-[16px] md:rounded-[32px] md:border md:border-[#0E464F] md:bg-[#08252B] flex-1'>
          <div className=' md:p-8 flex flex-col gap-8'>
            {/* Profile Image Upload Section */}
            <div className='bg-[#052228] border border-[#07373F] h-[328px] md:h-auto rounded-[24px] p-6 md:p-8 w-full'>
              <h2 className='text-white text-lg mb-6'>Upload Profile Photo</h2>
              <div className='flex justify-center items-center h-[200px] md:bg-[#041B20] py-[16px]'>
                <div className='flex justify-center items-center min-h-[240px]'>
                  <div 
                    onClick={triggerFileInput}
                    className={`bg-[#2096aa] w-[240px] h-[240px] rounded-[32px] flex items-center justify-center px-[5px] py-[5px] cursor-pointer overflow-hidden relative hover:bg-[#165665] transition-colors ${isSubmitting ? 'cursor-not-allowed' : ''}`}
                  >
                    {previewUrl ? (
                      <div className='w-full h-full relative group'>
                        <img 
                          src={previewUrl} 
                          alt="Profile preview" 
                          className='w-full h-full object-cover rounded-[32px]'
                        />
                        {!isSubmitting && (
                          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]'>
                            <p className='text-white text-sm'>Click to change photo</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className='text-center'>
                        <p className='text-white text-sm md:text-base'>
                          Click to upload photo
                        </p>
                      </div>
                    )}
                    {isSubmitting && <LoadingOverlay />}
                  </div>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                  aria-label="Upload profile photo"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Divider */}
            <div className='h-[1px] bg-[#07373F] w-full'></div>

            {/* Form Fields */}
            <div className='space-y-6 w-full max-w-[600px] mx-auto'>
              {/* Name Input */}
              <div className='space-y-2'>
                <label htmlFor="name" className='text-[#FAFAFA] block font-["Roboto"]'>
                  Enter your name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  aria-label="Full name"
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                  className='w-full bg-transparent text-[#FAFAFA] border border-[#07373F] rounded-lg p-3 font-["Roboto"]'
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1 font-['Roboto']" role="alert">{errors.fullName}</p>
                )}
              </div>

              {/* Email Input */}
              <div className='space-y-2'>
                <label htmlFor="email" className='text-[#FAFAFA] block font-["Roboto"]'>
                  Enter your email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-label="Email address"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  className='w-full bg-transparent text-[#FAFAFA] border border-[#07373F] rounded-lg p-3 font-["Roboto"]'
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm font-['Roboto'] mt-1" role="alert">{errors.email}</p>
                )}
              </div>

              {/* Special Requirements Textarea */}
              <div className='space-y-2'>
                <label htmlFor="requirements" className='text-[#FAFAFA] block'>
                  About the project
                </label>
                <textarea
                  id="requirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  rows={4}
                  className='w-full bg-transparent text-[#FAFAFA] border border-[#07373F] rounded-lg p-3 md:p-4 focus:outline-none focus:border-[#24A0B5] resize-none font-["Roboto"]'
                  placeholder='Textarea'
                />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className='flex flex-col-reverse md:flex-row gap-4 mt-6'>
              <button 
                onClick={() => goToPreviousStep(2)}
                disabled={isSubmitting}
                className='flex-1 border border-[#24A0B5] rounded-lg py-3 text-[#24A0B5] disabled:opacity-50 font-["JejuMyeongjo"] font-[400] text-[16px]disabled:cursor-not-allowed'
              >
                Back
              </button>
              <button 
                onClick={handleNext}
                disabled={isSubmitting}
                className='flex-1 bg-[#24A0B5] rounded-lg py-3 text-white disabled:opacity-50 font-["JejuMyeongjo"] font-[400] text-[16px]disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'Processing...' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}