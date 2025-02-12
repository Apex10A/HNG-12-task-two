// lib/cloudinary.js

const CLOUDINARY_CLOUD_NAME = 'dsymioclv';
const CLOUDINARY_UPLOAD_PRESET = 'praise';

export const uploadToCloudinary = async (file) => {
  if (!file) {
    throw new Error('No file provided');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Upload failed with status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.secure_url) {
      throw new Error('Upload succeeded but no secure URL was returned');
    }

    return data.secure_url;
  } catch (error) {
    console.error('Cloudinary upload failed:', error);
    throw new Error('Failed to upload image to Cloudinary');
  }
};