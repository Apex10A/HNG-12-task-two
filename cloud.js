const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your cloud name, API key, and API secret
cloudinary.config({
  cloud_name: 'dsymioclv',  // Replace with your cloud name
  api_key: '554291459194269',       // Replace with your API key
  api_secret: 'MSRnPX46GErlvhrlv12d0IcyEJM', // Replace with your API secret
});

// Example of uploading an image
cloudinary.uploader.upload('path_to_your_image.jpg', function(error, result) {
  if (error) {
    console.log('Error uploading image:', error);
  } else {
    console.log('Image uploaded successfully:', result);
  }
});
