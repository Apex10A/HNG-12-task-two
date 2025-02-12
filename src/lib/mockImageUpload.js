export const mockImageUpload = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Simulate a brief delay like a real upload would have
        setTimeout(() => {
          // Use the base64 string as our "hosted" URL
          resolve(reader.result);
        }, 500);
      };
      reader.readAsDataURL(file);
    });
  };
  