
export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'praise'); // Replace with your Cloudinary upload preset

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dsymioclv/image/upload`, // Replace with your cloud name
      {
        method: 'POST',
        body: formData,
      }
    );
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
};
