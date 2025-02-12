"use client"
import React, { useState, useRef } from 'react'
import Header from '../../layout/header'
import '../../app/index.css'
import  { useTicketForm }  from '../../hooks/useTicketForm';
import { mockImageUpload } from '../../lib/mockImageUpload';
import {cloudinary} from '../../lib/cloudinary';

export default function AttendeeDetails() {
  const { formData, handleInputChange, errors, goToNextStep, goToPreviousStep, setFormData, validateForm  } = useTicketForm();
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(formData.avatarUrl || null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        setIsSubmitting(true);
        const imageUrl = await cloudinary(file);
        setPreviewUrl(imageUrl);
        setFormData(prev => ({ ...prev, avatarUrl: imageUrl }));
      } catch (error) {
        console.error('Upload failed:', error);
        // Handle error - maybe show an error message to user
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleNext = async () => {
    if (isSubmitting) {
      return; // Don't proceed if still processing image
    }
    
    const isValid = validateForm(2);
    if (isValid) {
      try {
        await goToNextStep(2);
      } catch (error) {
        console.error('Navigation failed:', error);
      }
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
              <div className='flex justify-center items-center min-h-[240px]'>
                <div 
                  onClick={triggerFileInput}
                  className='bg-[#0E464F] w-full max-w-[240px] h-[240px] rounded-[32px] flex items-center justify-center p-4 cursor-pointer overflow-hidden relative hover:bg-[#165665] transition-colors'
                >
                  {previewUrl ? (
                    <div className='w-full h-full relative group'>
                      <img 
                        src={previewUrl} 
                        alt="Profile preview" 
                        className='w-full h-full object-cover rounded-[24px]'
                      />
                      <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-[24px]'>
                        <p className='text-white text-sm'>Click to change photo</p>
                      </div>
                    </div>
                  ) : (
                    <div className='text-center'>
                      {/* <Upload className='w-12 h-12 text-[#24A0B5] mx-auto mb-2' /> */}
                      <p className='text-white text-sm md:text-base'>
                        Click to upload photo
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
                aria-label="Upload profile photo"
              />
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
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          aria-label="Full name"
          aria-required="true"
          aria-invalid={!!errors.fullName}
          className='w-full bg-transparent text-[#FAFAFA] border border-[#07373F] rounded-lg p-3'
          placeholder="Enter your full name"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1" role="alert">{errors.fullName}</p>
        )}
              </div>

              {/* Email Input */}
              <div className='space-y-2'>
                <label htmlFor="email" className='text-[#FAFAFA] block'>
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
          className='w-full bg-transparent text-[#FAFAFA] border border-[#07373F] rounded-lg p-3'
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1" role="alert">{errors.email}</p>
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
                  className='w-full bg-transparent text-[#FAFAFA] border border-[#07373F] rounded-lg p-3 md:p-4 focus:outline-none focus:border-[#24A0B5] resize-none'
                  placeholder='Textarea'
                />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className='flex gap-4 mt-6'>
          <button 
            onClick={() => goToPreviousStep(2)}
            className='flex-1 border border-[#24A0B5] rounded-lg py-3 text-[#24A0B5]'
          >
            Back
          </button>
          <button 
      onClick={handleNext}
      disabled={isSubmitting}
      className='flex-1 bg-[#24A0B5] rounded-lg py-3 text-white disabled:opacity-50'
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
